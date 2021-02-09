 import React from "react"
 import  firebase from "firebase/app"
 import "firebase/auth"
 import "firebase/database"


  var firebaseConfig = {
    apiKey: "AIzaSyAp7v9BACUO85vETn5rdWvHLE_FhR6gR4U",
    authDomain: "bloodbank-4f6d0.firebaseapp.com",
    projectId: "bloodbank-4f6d0",
    storageBucket: "bloodbank-4f6d0.appspot.com",
    messagingSenderId: "202635056432",
    appId: "1:202635056432:web:e51732e0793504947464f5",
    measurementId: "G-0DEJQDH0HX"
  };
 
  firebase.initializeApp(firebaseConfig);
  export default firebase;
  
