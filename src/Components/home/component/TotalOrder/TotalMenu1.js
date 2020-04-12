import React, { useEffect , useState} from 'react';
import{useSelector,useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'reactstrap';
import HeaderSection from '../HeaderSection';

//redux
import { bindActionCreators } from 'redux';
import{NumberAction} from '../../../redux/Number/action';


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

import{Route,Switch, Link } from 'react-router-dom'

/*
<p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
<img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
<button onClick={() => firebase.auth().signOut()}>Sign-out</button>*/



function TotalPage() {



  const[Menu1,setMenu1]= useState([
    { number:1,id: 1,name:"do homework",text:"Hello"},
  ])
  
  const name = "Omlet"
  const[text,settext] = useState('')
  const [number,setnumber] = useState([])
  


  useEffect(() =>{
    retriverData()
  },[])

  const retriverData = () => {
    firestore.collection("Menu1").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myMenu1 =snapshot.docs.map( d => {
        const {id,name,text,number} = d.data()
        console.log(id,name,text,number)
        return{id,name,text,number}
      })
      setMenu1(myMenu1)
    })
  } 






return (
  <div>
  <br/>
  <div>
  <h1 class='text-center text-dark bg-white'>Order</h1>
  </div>
          <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="fixOmlet" src={Omlet}  />
            <MDBCardBody>
            <MDBCardTitle>ไข่เจียว: 50 Baht</MDBCardTitle>
            <MDBRow>{Menu1[0].number}</MDBRow>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
       
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