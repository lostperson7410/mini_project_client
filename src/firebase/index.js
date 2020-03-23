import firebase from 'firebase/app'
import 'firebase/auth'
import config from './config'

if(!firebase.app.lenght){
    firebase.initializeApp(config)
}

export default firebase.auth()