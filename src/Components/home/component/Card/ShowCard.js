import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../index'
import Cards from './Cards'




function App(){
  
  const[CardPost,setCardPost]= useState([])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')


  useEffect(() =>{
    retriverData()
  },[])

  const retriverData = () => {
    firestore.collection("CardPost").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myCardPost =snapshot.docs.map( d => {
        const {id,name,text,number} = d.data()
        console.log(id,name,text,number)
        return{id,name,text,number}
      })
      setCardPost(myCardPost)
    })
  } 




  const addCardPost  = () => {
    let id =(CardPost.length === 0)?1:CardPost[CardPost.length-1].id + 1
    let number =(CardPost.length === 0)?1:CardPost[CardPost.length-1].id + 1
    firestore.collection("CardPost").doc(id+'').set({id,name,text,number});
  }

  const editCardPost = (id) => {
    firestore.collection("CardPost").doc(id + '').set({id,name,text})
}

const deleteCardPost = (id) =>{
  firestore.collection("CardPost").doc(id + '').delete()
}


 const renderCardPost = () =>{
  if( CardPost&&CardPost.length)
  return(
    CardPost.map((CardPost,index)=>{
      return(
      <Cards key={index} CardPost={CardPost} deleteCardPost={deleteCardPost} editCardPost={editCardPost} />
       )
     }
    )
  )
  else{


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
