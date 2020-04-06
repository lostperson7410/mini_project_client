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
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAvDsAJmkXPn_9nHZRl9g4YwWJrCnDfc_4",
    authDomain: "mini-project-client.firebaseapp.com",
    databaseURL: "https://mini-project-client.firebaseio.com",
    projectId: "mini-project-client",
    storageBucket: "mini-project-client.appspot.com",
    messagingSenderId: "361415135338",
    appId: "1:361415135338:web:b4b1f2df91650343bffa13",
    measurementId: "G-HG64K9E922"
  };
  
  // Instantiate a Firebase app.
  firebase.initializeApp(firebaseConfig);
  
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

