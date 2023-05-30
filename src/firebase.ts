import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    // Add your Firebase configuration here
    apiKey: "AIzaSyBu9i7XfQ-Ts7HX-5Op8l8YLjGnSZ-Af6A",
    authDomain: "geolocalizacion-e994b.firebaseapp.com",
    databaseURL: "https://geolocalizacion-e994b.firebaseio.com",
    projectId: "geolocalizacion-e994b",
    storageBucket: "geolocalizacion-e994b.appspot.com",
    messagingSenderId: "697593689238",
    appId: "1:697593689238:web:3379a0558c616f52d8feb7",
    measurementId: "G-D6DHGYMWG0"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
