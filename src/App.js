import React, { useEffect } from 'react';
import './App.css';
import logo from './component/images/Cather1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import HeaderSection from './component/HeaderSection';
import { bindActionCreators } from 'redux';


useEffect(()=>{
  console.log(number)
},[])


function App() {


  

  return ( //ใส่หน้าบ้าน
    <div>
      <Container fluid> 
        <Row className = "ColortCol">
        <HeaderSection title ='Wellcome to Cather'/>
        </Row>
      </Container>

      <Container>
        <Row className = "ColortCol2">

        </Row>
      </Container>
    </div>
  );
}

export default App;
