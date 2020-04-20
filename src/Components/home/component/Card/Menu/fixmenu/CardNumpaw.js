import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import Num from '../images/น้ำเปล่า.jpg'
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

  const[countNumpaw,setcountNumpaw] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    ChanumData()
  },[])

  const ChanumData = () => {
    firestore.collection("Numpaw").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myChanum =snapshot.docs.map( d => {
        const {name,text,countChanum,} = d.data()
        console.log(name,text,countChanum)
        return{name,text,countChanum}
      })
      setChanum(myChanum)
    })
  } 


  const addNumpaw  = () => {
    firestore.collection("Numpaw").doc("Numpaw").set({name,text,countNumpaw},{ merge: true });

  }



const deleteNumpaw = () =>{
  firestore.collection("Numpaw").doc("Numpaw").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="img-fluid" src= {Num}  />
            <MDBCardBody>
            <MDBCardTitle>น้ำเปล่า: 50 Baht</MDBCardTitle>
            <Row>
              <Col>
              <Link class="btn btn-success btn-sm" onClick={addNumpaw}>Add menu</Link>
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

