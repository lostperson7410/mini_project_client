import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import Cha from '../images/Chanum.jpg'
import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'
import Menu from '../Menu';


function App(){
  

  const[Chanum,setChanum]= useState([])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  const[countChanum,setcountChanum] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    ChanumData()
  },[])

  const ChanumData = () => {
    firestore.collection("Chanum").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myChanum =snapshot.docs.map( d => {
        const {name,text,countChanum,} = d.data()
        console.log(name,text,countChanum)
        return{name,text,countChanum}
      })
      setChanum(myChanum)
    })
  } 


  const addChanum  = () => {
    firestore.collection("Chanum").doc("Chanum").set({name,text,countChanum},{ merge: true });

  }



const deleteChanum = () =>{
  firestore.collection("Chanum").doc("Chanum").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="img-fluid" src= {Cha}  />
            <MDBCardBody>
            <MDBCardTitle>ชานม: 50 Baht</MDBCardTitle>
            <Row>
              <Col>
              <Link class="btn btn-success btn-sm" onClick={addChanum}>Add menu</Link>
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

