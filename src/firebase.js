import firebase from "firebase/app";
import "firebase/database";

export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyBl5lQeELgwDwmias2rgy6gP1D_V-IexHU",
    authDomain: "get-to-chat.firebaseapp.com",
    databaseURL: "https://get-to-chat.firebaseio.com",
    projectId: "get-to-chat",
    storageBucket: "get-to-chat.appspot.com",
    messagingSenderId: "693908600345",
    appId: "1:693908600345:web:73e53bab826b8364e79c88",
    measurementId: "G-GXZK614ZZ5",
  })
  .database();