import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import Cof from '../images/Coffe.jpg'
import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'
import Menu from '../Menu';


function App(){
  

  const[Coffe,setCoffe]= useState([])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  const[countCoffe,setcountCoffe] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    CoffeData()
  },[])

  const CoffeData = () => {
    firestore.collection("Coffe").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myCoffe =snapshot.docs.map( d => {
        const {name,text,countCoffe,} = d.data()
        console.log(name,text,countCoffe)
        return{name,text,countCoffe}
      })
      setCoffe(myCoffe)
    })
  } 


  const addCoffe = () => {
    firestore.collection("Coffe").doc("Coffe").set({name,text,countCoffe},{ merge: true });

  }



const deleteCoffe = () =>{
  firestore.collection("Coffe").doc("Coffe").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="img-fluid" src= {Cof}  />
            <MDBCardBody>
            <MDBCardTitle>กาแฟร์: 50 Baht</MDBCardTitle>
            <Row>
              <Col>
              <Link class="btn btn-success btn-sm" onClick={addCoffe}>Add menu</Link>
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

