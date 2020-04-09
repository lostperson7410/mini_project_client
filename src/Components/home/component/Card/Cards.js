import React, { Component, useState, useEffect } from 'react';
import { MDBCloseIcon,MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css'
import logo from './images/Cather1.jpg'




export default props =>{
  const {CardPost,editCardPost,deleteCardPost}= props
  const {id,name,text,number} = CardPost


  return (
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={logo}  />
        <MDBCardBody>
          
          <MDBCardTitle>{name}</MDBCardTitle>
          
          <p class="text-center bg-white">Count:{number}</p>
          
          <p class="text-center bg-white">{text}</p> 


          <MDBBtn  onClick={() => deleteCardPost(id)}>del</MDBBtn>
          <MDBBtn  onClick={()=> editCardPost(id)}>edit</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}