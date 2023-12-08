const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

//set firebase database parameters
const firebaseConfig = {
   apiKey: "AIzaSyDp-jmlxzB6rQQbPY6Z5iCgtWnmKcgUXbU",
   authDomain: "greenwich-62716.firebaseapp.com",
   projectId: "greenwich-62716",
   storageBucket: "greenwich-62716.appspot.com",
   messagingSenderId: "1048233113259",
   appId: "1:1048233113259:web:94c91d556f3be524afe9ee",
   measurementId: "G-J841RNLHBL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;