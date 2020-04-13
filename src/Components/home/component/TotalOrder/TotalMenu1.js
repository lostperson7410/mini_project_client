import React, { useEffect , useState} from 'react';
import{useSelector,useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'reactstrap';
import HeaderSection from '../HeaderSection';


import Carousel from '../Card/Carousel'


import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

import CreateCard from '../Card/CreateCard'
import ShowCard from '../Card/ShowCard'
import CardLink from '../Card/Table/CardsLink'

import { render } from 'react-dom';

import MenuCards from '../Card/Menu/Menucard'

//firebase
import {firestore} from '../../../../index'

import Omlet from '../Card/Menu/images/Omlet.jpg'
import Karpaw from '../Card/Menu/images/Karpaw.jpg'
import Suki from '../Card/Menu/images/Suki.jpg'


import{Route,Switch, Link } from 'react-router-dom'

/*
<p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
<img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
<button onClick={() => firebase.auth().signOut()}>Sign-out</button>*/


function TotalPage() {

  



return (
  <div class='body' className = 'aqua-gradient'>
  <br/>
  <div>
  <h1 class='text-center'>Order</h1>
  </div>

          <div className= "RowCard">

       <Row >
        
   
            
       
      </Row>
       
        
      


        </div>
  </div>
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