import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../index'
import Cards from './Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

import { Container, Row, Col,} from 'reactstrap';




function App(){
  

  const[CardPost,setCardPost]= useState([
    { number:1,id: 1,name:"do homework",text:"Hello"},
  ])
  
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

  return(
      <div>
      <Container>
      <Col>
      <MDBCard>
      
        <MDBCardBody>
          
          <MDBCardTitle>อาหารตามสั่ง</MDBCardTitle>
          
          <div  class="md-form">
            ชื่อเมนู
           </div>
           <input type="text" name="name" id="form1" class="form-control" onChange={(e)=> setName(e.target.value)}/> 

            <br></br>
          <div  class="md-form">
          รายละเอียด
            </div>
          <br></br>
          <input type="text" text="text" id="form1" class="form-control" onChange={(e)=> settext(e.target.value)}/> 
          <br></br>


          <MDBBtn  onClick={addCardPost}>Add</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </Col>
      </Container>
    
     
    </div>
  );
}

export default App;