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
  

  const[Menu3,setMenu3]= useState([1])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  const[countS,setcountS] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    SukiData()
  },[])

  const SukiData = () => {
    firestore.collection("Menu3").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myMenu3 =snapshot.docs.map( d => {
        const {name,text,countS,} = d.data()
        console.log(name,text,countS)
        return{name,text,countS}
      })
      setMenu3(myMenu3)
    })
  } 


  const addSuki  = () => {
    firestore.collection("Menu3").doc("Suki").set({name,text,countS},{ merge: true });

  }

  const documents = firestore.collection('Menu3').get();

  const getS = () =>{
     let count = 0;
  for (const doc of documents) {
    count += doc.get('countS');
  }
  return count;
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
              <Col>
              {Menu3[0].countS}
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

