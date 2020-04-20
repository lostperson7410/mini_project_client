import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import RNMG from '../images/ราดหน้าหมูหมักหมี่ก๊อป.jpg'
import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'
import Menu from '../Menu';


function App(){
  

  const[Menu8,setMenu8]= useState([1])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  const[countRNMG,setcountRNMG] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    SukiData()
  },[])

  const SukiData = () => {
    firestore.collection("Menu8").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myMenu8 =snapshot.docs.map( d => {
        const {name,text,countRNMG,} = d.data()
        console.log(name,text,countRNMG)
        return{name,text,countRNMG}
      })
      setMenu8(myMenu8)
    })
  } 


  const addSuki  = () => {
    firestore.collection("Menu8").doc("ราดหน้าหมูหมักหมี่ก๊อป").set({name,text,countRNMG},{ merge: true });

  }



const deleteSuki = () =>{
  firestore.collection("Menu8").doc("ราดหน้าหมูหมักหมี่ก๊อป").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="fixRNMG" src={RNMG}  />
            <MDBCardBody>
            <MDBCardTitle>ราดหน้าหมูหมักหมี่ก๊อป: 50 Baht</MDBCardTitle>
            <Row>
              <Col>
                {Menu8[0].countRNMG}             
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

