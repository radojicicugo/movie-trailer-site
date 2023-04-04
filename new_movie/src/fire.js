import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
     apiKey: "AIzaSyAnxAbG5Iizp0j9WxEGiaTgQFyu8VhQn1g",
     authDomain: "movie-trailer-f3832.firebaseapp.com",
     projectId: "movie-trailer-f3832",
     storageBucket: "movie-trailer-f3832.appspot.com",
     messagingSenderId: "720740434469",
     appId: "1:720740434469:web:19becd75d6a589dbfa75cc",
     measurementId: "G-CNMS92Y4TZ" 
};

const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export { storage, db, fire as default }