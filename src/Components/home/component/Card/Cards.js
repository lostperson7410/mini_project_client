import React, { Component, useState, useEffect } from 'react';
import { MDBCloseIcon,MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css'


export default props =>{
  const {CardPost,editCardPost,deleteCardPost}= props
  const {id,name} = CardPost
  return (
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
          waves />
        <MDBCardBody>
          
          <MDBCardTitle>{name}</MDBCardTitle>
          
          
          <p class="text-center bg-white">fddf</p> 


          <MDBBtn  onClick={() => deleteCardPost(id)}>del</MDBBtn>
          <MDBBtn  onClick={()=> editCardPost(id)}>edit</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}