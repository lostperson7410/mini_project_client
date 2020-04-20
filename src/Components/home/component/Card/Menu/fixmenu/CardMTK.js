import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import MTK from '../images/หมูทอดกระเทียม.jpg'
import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'


function App(){
  

  const[Menu9,setMenu9]= useState([1])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  const[countMTK,setcountMTK] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    MTKData()
  },[])

  const MTKData = () => {
    firestore.collection("Menu9").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myMenu9 =snapshot.docs.map( d => {
        const {name,text,countMTK,} = d.data()
        console.log(name,text,countMTK)
        return{name,text,countMTK}
      })
      setMenu9(myMenu9)
    })
  } 


  const addMTK  = () => {
    firestore.collection("Menu9").doc("หมูทอดกระเทียม").set({name,text,countMTK},{ merge: true });

  }


const deleteMTK = () =>{
  firestore.collection("Menu9").doc("หมูทอดกระเทียม").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="fixMTK" src={MTK}  />
            <MDBCardBody>
            <MDBCardTitle>หมูทอดกระเทียม: 50 Baht</MDBCardTitle>
            <Row>
              {Menu9[0].countMTK}
              <Col>
              <Link class="btn btn-success btn-sm" onClick={addMTK}>Add menu</Link>
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

