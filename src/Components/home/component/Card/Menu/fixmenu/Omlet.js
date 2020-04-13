import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import MenuCards from '../Menucard'
import 'bootstrap/dist/css/bootstrap.min.css';

import Omlet from '../images/Omlet.jpg'
import './Img.css'




import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'



function App(){
  

  const[Menu1,setMenu1]= useState([
    { number:1,id: 1,name:"do homework",text:"Hello"},
  ])
  
  const name = "Omlet"
  const[text,settext] = useState('')


  useEffect(() =>{
    retriverData()
  },[])

  const retriverData = () => {
    firestore.collection("Menu1").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myMenu1 =snapshot.docs.map( d => {
        const {name,text,number} = d.data()
        console.log(name,text,number)
        return{name,text,number}
      })
      setMenu1(myMenu1)
    })
  } 




  const addOmlet  = () => {
    
     let number = number + 1
    firestore.collection("Menu1").doc("omlet").set({name,text,number});
  }



const deleteOmlet = () =>{
  firestore.collection("Menu1").doc('omlet').delete()
}



return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="fixOmlet" src={Omlet}  />
            <MDBCardBody>
            <MDBCardTitle>ไข่เจียว: 50 Baht</MDBCardTitle>
            <Row>
              {Menu1[0].number}
              <Col>
              <Link class="btn btn-success btn-sm" onClick={addOmlet}>Add menu</Link>
              </Col>
            </Row>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
       
        </div>

    );
}

export default App;


/*
<div>
<MDBCol style={{ maxWidth: "22rem" }}>
  <MDBCard>
  <MDBCardImage className="img-fluid" src={Omlet}  />
    <MDBCardBody>
      <MDBCardTitle>Omlet</MDBCardTitle>
      <Link to="/MenuPage" class="btn btn-success">MenuPage</Link>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
       <div>
  
     </div>
</div>

*/