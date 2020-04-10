import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../index'
import Cards from './Cards'
import 'bootstrap/dist/css/bootstrap.min.css';


//redux
import{NumberAction} from '../../../redux/Number/action';
import{useSelector,useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col,} from 'reactstrap';




function App(){
  

  const[CardPost,setCardPost]= useState([
    { number:1,id: 1,name:"do homework",text:"Hello"},
  ])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  
  const actions = bindActionCreators(NumberAction,useDispatch());
  const number = useSelector(state => state.number)


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
    actions.INCREMENT(number) 
  }

  const editCardPost = (id) => {
    firestore.collection("CardPost").doc(id + '').set({id,name,text,number})
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
      <Cards key={index} CardPost={CardPost} deleteCardPost={deleteCardPost} editCardPost={editCardPost} />
       )
     }
    )
  )
  else
  return(<li>No CardPost</li>)
}

  return(
    <div>
      <Container>
        <Col>
        อาหารตามสั่ง
        <br></br>
       <input type="text" name="name" onChange={(e)=> setName(e.target.value)}/> 
       <br></br>
       รายละเอียด
       <br></br>
       <input type="text" text="text" onChange={(e)=> settext(e.target.value)}/> 
       <br></br>
       <button onClick={addCardPost}>Add</button>

        </Col>

      </Container>
    
     
    </div>
  );
}

export default App;