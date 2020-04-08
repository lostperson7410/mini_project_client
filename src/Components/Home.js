import React, { useEffect , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'reactstrap';



import HeaderSection from './home/component/HeaderSection';
import ShowCard from './home/component/Card/ShowCard'
import CardLink from './home/component/Card/Table/CardsLink'
import Carousel from './home/component/Card/Carousel'


import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

/*
<p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
<img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
<button onClick={() => firebase.auth().signOut()}>Sign-out</button>*/

import SecondPage from './SecondPage'
import MenuPage from './home/component/Card/Menu/Menu'
import Table1 from './home/component/Card/Table/Table1';
import Table2 from './home/component/Card/Table/Table2';
import Table3 from './home/component/Card/Table/Table3';
import Table4 from './home/component/Card/Table/Table4';


function Home() {
  return(
    <Router>
      <div>
      <HeaderSection title ='Wellcome to Cather'/>
        <Switch>
            <Route exact path="/" component={Homes} />
            <Route path="/SecondPage" component={SecondPage}/>
            <Route path="/MenuPage" component={MenuPage}/>
        </Switch>
      </div>
    </Router>
  )
  
}

const Homes =() =>(
  
    <div className = 'aqua-gradient'>
      <div>
        <br>
        </br>
      <nav class="navbar navbar-expand">
      <Carousel/>
        </nav>
      </div>
  <br></br>
      <Container>
        <Row>
        <Table1/>
        <Table2/>
        <Table3/>
        </Row>
      </Container>
  
  
    </div>

);




export default Home;

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
/*

return ( //ใส่หน้าบ้าน
  <div className = 'aqua-gradient'>
    <div>
    <HeaderSection title ='Wellcome to Cather'/>
    </div>
    <div>
      <br>
      </br>
    <nav class="navbar navbar-expand">
    <Carousel/>
      </nav>
    </div>
<br></br>
    <div class ="ContainerS  position-static ">
    <ShowCard/>
    </div>
    <Container>
      <CardLink/>
    </Container>


  </div>

);*/