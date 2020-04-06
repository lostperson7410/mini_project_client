import React from 'react';
import logo from './images/Cather1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';


import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


import './HeaderSection.css'

const HeaderSection = props => {

    return(
        <div>

            <nav class="navbar navbar-expand navbar-dark bg-dark">
                
                <Col>
                <img src={logo} class="img-thumbnail" className ="ImgWH" />
                </Col>
                <Col>
                <p class="text-center bg-dark">{props.title}</p>
                </Col>
                <div>
                <img id="photo" className="pic" class="bg-white" src={firebase.auth().currentUser.photoURL}/>
                <button type="button" class="btn btn-outline-light" onClick={() => firebase.auth().signOut()}>Sign-out</button>
                </div>
        </nav>
            
        </div>
    )

}
export default HeaderSection;