import React, { useEffect , useState} from 'react';
import{useSelector,useDispatch} from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { bindActionCreators } from 'redux';
import{NumberAction} from './Components/redux/Number/action';
import LoginForm from './Components/LoginForm'

function App() {


  return ( //ใส่หน้าบ้าน
    <div>
        <LoginForm/>
    </div>
  );
}

export default App;
