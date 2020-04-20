import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import แกงป่าไก่ from '../images/แกงป่าไก่.jpg'
import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'
import Menu from '../Menu';


function App(){
  

  const[Menu4,setMenu4]= useState([1])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  const[countPK,setcountPK] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    SukiData()
  },[])

  const SukiData = () => {
    firestore.collection("Menu4").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myMenu4 =snapshot.docs.map( d => {
        const {name,text,countPK,} = d.data()
        console.log(name,text,countPK)
        return{name,text,countPK}
      })
      setMenu4(myMenu4)
    })
  } 


  const addPK  = () => {
    firestore.collection("Menu4").doc("แกงป่าไก่").set({name,text,countPK},{ merge: true });

  }


const deleteSuki = () =>{
  firestore.collection("Menu4").doc("แกงป่าไก่").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="img-fluid" src={แกงป่าไก่}  />
            <MDBCardBody>
            <MDBCardTitle>แกงป่าไก่: 50 Baht</MDBCardTitle>
            <Row>
              <Col>
              <Link class="btn btn-success btn-sm" onClick={addPK}>Add menu</Link>
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

