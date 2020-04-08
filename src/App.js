import React, { useEffect , useState} from 'react';
import{useSelector,useDispatch} from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { bindActionCreators } from 'redux';
import{NumberAction} from './Components/redux/Number/action';
import config from './config'




//firebase
import firebase from 'firebase/app';
import "firebase/firestore";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";


import SecondPage from './Components/SecondPage'
import MenuPage from './Components/home/component/Card/Menu/Menu'
import Homes from './Components/Home'
import LoginPage from './Components/LoginForm'

function App() {


  return ( //ใส่หน้าบ้าน
  
  <div>
    <LoginPage/>
    </div>
  );
}

export default App;
