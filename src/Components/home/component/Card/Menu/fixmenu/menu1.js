import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import Omlet from './Omlet'
import Suki from './Suki'
import Karpaw from './Karpaw'

import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'



function App(){
  

return (
      <MDBContainer>
      <MDBCarousel 
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"

      >
          <MDBCarouselItem itemId="1">
            <Row>
              <Omlet/>
              <Suki/>
              <Karpaw/>
            </Row>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
          <Row>
              <Omlet/>
              <Omlet/>
              <Omlet/>
          </Row>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
          <Row>
              <Omlet/>
              <Omlet/>
              <Omlet/>
          </Row>
          </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
    );
}

export default App;


/*
<div>
<MDBCol style={{ maxWidth: "22rem" }}>
  <MDBCard>
  <MDBCardImage className="img-fluid" src={Omlet}  />
    <MDBCardBody>
      <MDBCardTitle>Omlet</MDBCardTitle>
      <Link to="/MenuPage" class="btn btn-success">MenuPage</Link>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
       <div>
  
     </div>
</div>

*/