import React, { Component, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MDBCloseIcon,MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/Cather1.jpg'

//route

import{Route,Switch, Link } from 'react-router-dom'



function CardLink() {

  const[count,setcount] = useState(0);
  return (
    <div>
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
      <MDBCardImage className="img-fluid" src={logo}  />
        <MDBCardBody>
          <MDBCardTitle>Table1</MDBCardTitle>
          <Link to="/MenuPage" class="btn btn-success">MenuPage</Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
           <div>
      
         </div>
    </div>
  )
}

export default CardLink;