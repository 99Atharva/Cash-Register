import firebase from "firebase";


  const firebaseApp = firebase.initializeApp(
    {
      apiKey: "AIzaSyAN68V9QH-dfAuGyVABAPlqKfzoqYnSFv8",
    authDomain: "cash-register-bac87.firebaseapp.com",
    projectId: "cash-register-bac87",
    storageBucket: "cash-register-bac87.appspot.com",
    messagingSenderId: "572329962306",
    appId: "1:572329962306:web:2c39c22eaeab7f9439f6db",
    measurementId: "G-DD2K0VD7KC"
    });
  

  const db = firebaseApp.firestore();

  export default db;