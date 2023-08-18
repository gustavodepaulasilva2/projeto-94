import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyAmz0wtClDnnYCOfNcS25dRouzhuPtZ9LU",
    authDomain: "tasks-8f707.firebaseapp.com",
    projectId: "tasks-8f707",
    storageBucket: "tasks-8f707.appspot.com",
    messagingSenderId: "449328430157",
    appId: "1:449328430157:web:f8620174a4df6550ce7004"
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()