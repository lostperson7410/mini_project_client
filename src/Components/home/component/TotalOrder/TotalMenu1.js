import React, { useEffect , useState} from 'react';
import{useSelector,useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'reactstrap';
import HeaderSection from '../HeaderSection';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

import CardOmlet from '../Card/Menu/fixmenu/Omlet'
import CardKarpaw from '../Card/Menu/fixmenu/Karpaw'
import CardSuki from '../Card/Menu/fixmenu/Suki'
import Showcard from '../Card/ShowCard'
import{Route,Switch, Link } from 'react-router-dom'

/*
<p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
<img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
<button onClick={() => firebase.auth().signOut()}>Sign-out</button>*/


function TotalPage() {

  



return (
  <body class='container-fluid bg-dark '>
  <br/>
  <div>
  <h1 class='text-center mh-100'>Order</h1>
  </div>
          <div className= "RowCard">

       <Row >

         <CardOmlet/>
         <CardKarpaw/>
         <CardSuki/>
       
      </Row>   
        </div>
  <br/>
  <br/>
  <h1>รายการตามสั่งอื่นๆ</h1>
  <br/>
  <br/>
  <Showcard/>

  </body>
  
    );
}

export default TotalPage;
/*


<Link class="btn btn-success" onClick={addOmlet}>Add to menu</Link>.



      <Container>
        <Row className = "ColortCol2">
          <div>
              <h2>Count:{number}</h2>
            <h2>
              <button onClick={() => actions.INCREMENT(number)}>INCREMENT</button>
              <button onClick={() => actions.DECREMENT(number)}>DECREMENT</button>
            </h2>
          </div>
        </Row>
      </Container> 
*/
/*    <div>
      <br/>
      <div>
      <h1 class='text-center text-dark bg-white'>Order</h1>
      </div>
      <ul>{renderOmlet}</ul>
    </div>*/