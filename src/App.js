import React, { useEffect , useState} from 'react';
import{useSelector,useDispatch} from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import HeaderSection from './component/HeaderSection';
import { bindActionCreators } from 'redux';
import{NumberAction} from './redux/Number/action';

function App() {



  const actions = bindActionCreators(NumberAction,useDispatch());

  const number = useSelector(state => state.number)


  useEffect(()=>{
    console.log(number)
  },[])

  return ( //ใส่หน้าบ้าน
    <div>
      <Container fluid> 
        <Row className = "ColortCol">
        <HeaderSection title ='Wellcome to Cather'/>
        </Row>
      </Container>

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
    </div>
  );
}

export default App;
