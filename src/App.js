import React from 'react';
import './App.css';
import logo from './component/images/Cather1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

function App() {
  console.log(logo);
  return ( //ใส่หน้าบ้าน
    <div>

        <Container fluid>
          <Row className ="colorerow">
              <img src = {logo} alt="Logo" className = "setlogo" />
            <Col className ="ColortCol">
              

              
            </Col>
            

          </Row>
        </Container>
  
  
    </div>

  );
}

export default App;
