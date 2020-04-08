import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../index'
import Cards from './Cards'


//redux
import{NumberAction} from '../../../redux/Number/action';
import{useSelector,useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';




function App(){
  

  const[CardPost,setCardPost]= useState([
    { id: 1,name:"do homewaork"},
  ])
  
  const[name,setName] = useState('')


  useEffect(() =>{
    retriverData()
  },[])

  const retriverData = () => {
    firestore.collection("CardPost").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myCardPost =snapshot.docs.map(d => {
        const {id,name} = d.data()
        console.log(id,name)
        return{id,name}
      })
      setCardPost(myCardPost)
    })
  } 


  const actions = bindActionCreators(NumberAction,useDispatch());
  const number = useSelector(state => state.number)


  const addCardPost  = () => {
    let id =(CardPost.length === 0)?1:CardPost[CardPost.length-1].id + 1
    firestore.collection("CardPost").doc(id+'').set({id,name});
    actions.INCREMENT(number) 
  }

  const editCardPost = (id) => {
    firestore.collection("CardPost").doc(id + '').set({id,name})
}

const deleteCardPost = (id) =>{
  firestore.collection("CardPost").doc(id + '').delete()
  actions.DECREMENT(number)
}


 const renderCardPost = () =>{
  if( CardPost&&CardPost.length)
  return(
    CardPost.map((CardPost,index)=>{
      return(
      <Cards key={index} CardPost={CardPost} deleteCardPost={deleteCardPost} editCardPost={editCardPost} number ={number}/>
       )
     }
    )
  )
  else{

    actions.OVERFLOW(number)

    return(<li>No CardPost</li>)
  }
}

  return(
    <div>
        <ul style={{display:'flex',listStyle:'none'}}>{renderCardPost()}</ul>
    </div>
  );
}

export default App;
