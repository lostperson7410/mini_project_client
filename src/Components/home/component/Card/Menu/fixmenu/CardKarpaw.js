import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import Karpaw from '../images/Karpaw.jpg'
import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'


function App(){
  

  const[Menu2,setMenu2]= useState([2])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  const[countK,setcountK] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    KarpawData()
  },[])

  const KarpawData = () => {
    firestore.collection("Menu2").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myMenu2 =snapshot.docs.map( d => {
        const {name,text,countK,} = d.data()
        console.log(name,text,countK)
        return{name,text,countK}
      })
      setMenu2(myMenu2)
    })
  } 


  const addKarpaw  = () => {
    firestore.collection("Menu2").doc("Karpaw").set({name,text,countK},{ merge: true });

  }

  const documents = firestore.collection('Menu2').get();


const deleteKarpaw = () =>{
  firestore.collection("Menu2").doc("Karpaw").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="fixKarpaw" src={Karpaw}  />
            <MDBCardBody>
            <MDBCardTitle>กะเพรา: 50 Baht</MDBCardTitle>
            <Row>
              <Col>
              {Menu2[0].countK}
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

