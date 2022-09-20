// Initialize firestore
firebase.initializeApp({
    apiKey: 'AIzaSyCUk6-YcDJrcA3Vs6Z2mmGfDTNbD7xCyHE',
    authDomain: 'smartconnection-9d342.firebaseapp.com',
    projectId: 'smartconnection-9d342'
  });
  
var db = firebase.firestore();

function runFunction() {
    const n = document.getElementById("n-value").value
    const m = document.getElementById("m-value").value
    writeUserData(n,m)
}

import { getDatabase, ref, set } from "firebase/database";

function writeUserData(name, message) {
  const db = getDatabase();
  set(ref(db), {
    username: name,
    message: message
  });
}
