import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import Ole from '../images/โอเลี่ยง.jpg'
import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'
import Menu from '../Menu';


function App(){
  

  const[Oleng,setOleng]= useState([])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  const[countOleng,setcountOleng] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    OlengData()
  },[])

  const OlengData = () => {
    firestore.collection("Oleng").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myOleng =snapshot.docs.map( d => {
        const {name,text,countOleng,} = d.data()
        console.log(name,text,countOleng)
        return{name,text,countOleng}
      })
      setOleng(myOleng)
    })
  } 


  const addOleng  = () => {
    firestore.collection("Oleng").doc("Oleng").set({name,text,countOleng},{ merge: true });

  }



const deleteOleng = () =>{
  firestore.collection("Oleng").doc("Oleng").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="img-fluid" src= {Ole}  />
            <MDBCardBody>
            <MDBCardTitle>โอเลี่ยง: 20 Baht</MDBCardTitle>
            <Row>
              <Col>
              <Link class="btn btn-success btn-sm" onClick={addOleng}>Add menu</Link>
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

