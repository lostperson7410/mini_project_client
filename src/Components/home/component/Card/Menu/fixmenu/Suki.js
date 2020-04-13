import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import Suki from '../images/Suki.jpg'
import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'
import Menu from '../Menu';


function App(){
  

  const[Menu3,setMenu3]= useState([
    { numberS:1,id: 1,name:"do homework",text:"Hello"},
  ])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')


  useEffect(() =>{
    SukiData()
  },[])

  const SukiData = () => {
    firestore.collection("Menu3").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myMenu3 =snapshot.docs.map( d => {
        const {name,text,numberS} = d.data()
        console.log(name,text,numberS)
        return{name,text,numberS}
      })
      setMenu3(myMenu3)
    })
  } 


  const addSuki  = () => {
    let numberS = numberS +1
    firestore.collection("Menu3").doc("Suki").set({name,text,numberS});

  }

const deleteSuki = () =>{
  firestore.collection("Menu3").doc("Suki").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="img-fluid" src={Suki}  />
            <MDBCardBody>
            <MDBCardTitle>สุกกี้: 50 Baht</MDBCardTitle>
            <Row>
              {Menu3[0].numberS}
              <Col>
              <Link class="btn btn-success btn-sm" onClick={addSuki}>Add menu</Link>
              </Col>
            </Row>           
          </MDBCardBody>
        </MDBCard>
        </MDBCol>

            <div>
        
            </div>
        </div>

    );
}

export default App;

