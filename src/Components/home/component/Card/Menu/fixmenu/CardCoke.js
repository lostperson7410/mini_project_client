import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import Coke from '../images/Coke.jpg'
import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'
import Menu from '../Menu';


function App(){
  

  const[Coke1,setCoke1]= useState([])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  const[countCoke,setcountCoke] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    CokeData()
  },[])

  const CokeData = () => {
    firestore.collection("Coke1").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myCoke1 =snapshot.docs.map( d => {
        const {name,text,countCoke,} = d.data()
        console.log(name,text,countCoke)
        return{name,text,countCoke}
      })
      setCoke1(myCoke1)
    })
  } 


  const addCoke  = () => {
    firestore.collection("Coke1").doc("Coke1").set({name,text,countCoke},{ merge: true });

  }



const deleteCoke = () =>{
  firestore.collection("Coke1").doc("Coke1").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="img-fluid" src={Coke}  />
            <MDBCardBody>
            <MDBCardTitle>โค้ก: 15 Baht</MDBCardTitle>
            <Row>
              <Col>
              <Link class="btn btn-success btn-sm" onClick={addCoke}>Add menu</Link>
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

