import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyDj-vY3N5PQ1RDLbsbK85G6JBbMmTXMU5c",
    authDomain: "imstudium-b7940.firebaseapp.com",
    databaseURL: "https://imstudium-b7940-default-rtdb.firebaseio.com",
    projectId: "imstudium-b7940",
    storageBucket: "imstudium-b7940.appspot.com",
    messagingSenderId: "909412362520",
    appId: "1:909412362520:web:6980a283c134da263e166d"
    
  };
   
   
  if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  };


  export const auth = firebase.auth()
  export const db = firebase.firestore()
  
  export default firebase;
 