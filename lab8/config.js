const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
   apiKey: "AIzaSyDTXAWuADPkv9zfcuGjj7F33ZE-Z5qI4zg",
   authDomain: "gch1107-fd7e0.firebaseapp.com",
   projectId: "gch1107-fd7e0",
   storageBucket: "gch1107-fd7e0.appspot.com",
   messagingSenderId: "192756362203",
   appId: "1:192756362203:web:2efd0404c3e9179b2955fe",
   measurementId: "G-FM86Z9DMWB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;