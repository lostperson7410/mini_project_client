/* eslint-disable react/jsx-no-comment-textnodes */
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//Home
import Home from './Home';




//Css
import './Login.css'
import { Router } from 'react-router-dom';
// Initialize Firebase

  // Instantiate a Firebase app.


  //fireStore


  
  class LoginForm extends Component {
  
    state = {
        isSignedIn: false
    };


    uiConfig ={

        signInFlow: 'popup',
        signInOptions:[
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callback: {
            signInSuccess: ()=> false
        }
    };

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({isSignedIn: !!user})
        );
      }

      componentWillUnmount() {
        this.unregisterAuthObserver();
      }


    render() {
        if (!this.state.isSignedIn){
        return (
          <div  className="bg">
          <h1>Welcome To Cather Restaurant</h1>
          <h1> Please Sign In </h1>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
       
        );
        }
        return (
          <Home/>
      );
    }
  }

  export default LoginForm;
