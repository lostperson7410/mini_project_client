import React, { useEffect , useState} from 'react';
import{useSelector,useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'reactstrap';
import HeaderSection from './home/component/HeaderSection';

//redux
import { bindActionCreators } from 'redux';
import{NumberAction} from './redux/Number/action';


import Carousel from './home/component/Card/Carousel'


import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import CreateCard from './home/component/Card/CreateCard'
import ShowCard from './home/component/Card/ShowCard'
import CardLink from './home/component/Card/Table/CardsLink'

import { render } from 'react-dom';
/*
<p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
<img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
<button onClick={() => firebase.auth().signOut()}>Sign-out</button>*/


function TotalPage() {


  const actions = bindActionCreators(NumberAction,useDispatch());

  const number = useSelector(state => state.number)


  useEffect(()=>{
    console.log(number)
  },[])

  return ( //ใส่หน้าบ้าน
    <div className = 'aqua-gradient'>
      <div>
        <br>
        </br>
      </div>
        <br></br>
      <div class ="ContainerS  position-static ">
      <ShowCard/>
      </div>
      <Container>
        <CardLink/>
      </Container>


    </div>

  );
}

export default TotalPage;

/*
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