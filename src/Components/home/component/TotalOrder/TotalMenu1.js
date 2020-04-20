import React, { useEffect , useState} from 'react';
import{useSelector,useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'reactstrap';
import HeaderSection from '../HeaderSection';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';



//firebase
import firebase from 'firebase';
import {firestore} from '../../../../index'


import CardOmlet from '../Card/Menu/fixmenu/CardOmlet'
import CardKarpaw from '../Card/Menu/fixmenu/CardKarpaw'
import CardSuki from '../Card/Menu/fixmenu/CardSuki'
import CardPK from '../Card/Menu/fixmenu/CardPK'
import CardRNMG from '../Card/Menu/fixmenu/CardRNMG'
import CardTM from '../Card/Menu/fixmenu/CardTM'
import CardMTK from '../Card/Menu/fixmenu/CardMTK'
import CardFR from '../Card/Menu/fixmenu/CardFR'
import CardNP from '../Card/Menu/fixmenu/CardNP'
import CardCoke from '../Card/Menu/fixmenu/CardCoke'
import CardOleng from '../Card/Menu/fixmenu/CardOleng'
import CardChanum from '../Card/Menu/fixmenu/CardChanum'
import CardCoffe from '../Card/Menu/fixmenu/CardCoffe'
import CardNumpaw from '../Card/Menu/fixmenu/CardNumpaw'
import Showcard from '../Card/ShowCard'
import{Route,Switch, Link } from 'react-router-dom'

/*
<p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
<img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
<button onClick={() => firebase.auth().signOut()}>Sign-out</button>*/


function TotalPage() {

  
  const deleteTable1 = () =>{

    firestore.collection("Chanum").doc("Chanum").delete()
    firestore.collection("Coffe").doc("Coffe").delete()
    firestore.collection("Coke1").doc("Coke1").delete()
    firestore.collection("Menu5").doc("ข้าวผัด").delete()
    firestore.collection("Menu2").doc("Karpaw").delete()
    firestore.collection("Menu9").doc("หมูทอดกระเทียม").delete()
    firestore.collection("Menu6").doc("ข้าวหน้าเป็ด").delete()
    firestore.collection("Numpaw").doc("Numpaw").delete()
    firestore.collection("Oleng").doc("Oleng").delete()
    firestore.collection("Menu1").doc('omlet').delete()
    firestore.collection("Menu4").doc("แกงป่าไก่").delete()
    firestore.collection("Menu8").doc("ราดหน้าหมูหมักหมี่ก๊อป").delete()
    firestore.collection("Menu3").doc("Suki").delete()
    firestore.collection("Menu7").doc("ต้มเลือดหมู").delete()
    firestore.collection("Menu7").doc("ต้มเลือดหมู").delete()
  }


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
  <Showcard/>
  <br/>
  <h1>เครื่องดื่มต่างๆ</h1>
  <div className="RowCard">
          <Row>
            <CardChanum/>
            <CardCoffe/>
            <CardNumpaw/>

          </Row>
          <br/>
          <Row>
          <CardOleng/>
            <CardCoke/>
          </Row>
      </div>
  <br/>
  <Container>
  <Link class="btn btn-success btn-sm" onClick={deleteTable1}>Finish Order</Link>
  </Container>

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