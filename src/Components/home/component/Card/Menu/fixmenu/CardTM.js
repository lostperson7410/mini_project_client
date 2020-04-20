import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import TLM from '../images/ต้มเลือดหมู.jpg'
import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'
import Menu from '../Menu';


function App(){
  

  const[Menu7,setMenu7]= useState([4])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  const[countTM,setcountTM] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    TMData()
  },[])

  const TMData = () => {
    firestore.collection("Menu7").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myMenu7 =snapshot.docs.map( d => {
        const {name,text,countTM,} = d.data()
        console.log(name,text,countTM)
        return{name,text,countTM}
      })
      setMenu7(myMenu7)
    })
  } 


  const addfirerice  = () => {
    firestore.collection("Menu7").doc("ต้มเลือดหมู").set({name,text,countTM},{ merge: true });

  }



const deleteSuki = () =>{
  firestore.collection("Menu7").doc("ต้มเลือดหมู").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="img-fluid" src={TLM}  />
            <MDBCardBody>
            <MDBCardTitle>ต้มเลือดหมู: 50 Baht</MDBCardTitle>
            <Row>
              <Col>
              <Link class="btn btn-success btn-sm" onClick={addfirerice}>Add menu</Link>
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

