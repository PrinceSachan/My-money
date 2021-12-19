import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDSNejqLSU3tsc3QUPtTRzLW3ZdZS-1n9U",
    authDomain: "mymoney-6061b.firebaseapp.com",
    projectId: "mymoney-6061b",
    storageBucket: "mymoney-6061b.appspot.com",
    messagingSenderId: "447218044094",
    appId: "1:447218044094:web:4d68992ca4b92941d7e2ef"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }