import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import NP from '../images/ข้าวหน้าเป็ด.jpg'
import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'


function App(){
  

  const[Menu6,setMenu6]= useState([4])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  const[countNP,setcountNP] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    NPData()
  },[])

  const NPData = () => {
    firestore.collection("Menu6").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myMenu6 =snapshot.docs.map( d => {
        const {name,text,countNP,} = d.data()
        console.log(name,text,countNP)
        return{name,text,countNP}
      })
      setMenu6(myMenu6)
    })
  } 


  const addNP  = () => {
    firestore.collection("Menu6").doc("ข้าวหน้าเป็ด").set({name,text,countNP},{ merge: true });

  }



const deleteNP = () =>{
  firestore.collection("Menu6").doc("ข้าวหน้าเป็ด").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="fixNP" src={NP}  />
            <MDBCardBody>
            <MDBCardTitle>ข้าวหน้าเป็ด: 50 Baht</MDBCardTitle>
            <Row>
              {Menu6[0].countNP}
              <Col>
              <Link class="btn btn-success btn-sm" onClick={addNP}>Add menu</Link>
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

