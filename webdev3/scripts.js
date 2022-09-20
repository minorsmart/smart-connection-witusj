// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDreJNWcrSxVQamnzLb2_RDyz67W2PCDqk",
    authDomain: "smartconnection-d14f1.firebaseapp.com",
    projectId: "smartconnection-d14f1",
    storageBucket: "smartconnection-d14f1.appspot.com",
    messagingSenderId: "701207053339",
    appId: "1:701207053339:web:4d5f92e862037e66d8e4be",
    measurementId: "G-LQX41FYSNW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

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
