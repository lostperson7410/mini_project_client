import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//redux
import {Provider} from 'react-redux';
import {store} from './Components/redux/store'
//firebase
import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config';
import 'firebase/storage';
//bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

if (firebase.apps.length ===0)
    firebase.initializeApp(config)

export const firestore = firebase.firestore()


const storage = firebase.storage();

export{
    storage,firebase as default
}







ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
