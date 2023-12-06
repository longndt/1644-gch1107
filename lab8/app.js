const express = require('express');
const cors = require('cors');
const db = require("./config.js");
const { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc } = require('firebase/firestore');
const app = express();

app.use(express.json());
app.use(cors());


//READ ALL
app.get('/student', async (req, res) => {
   try {
      const collectionName = collection(db, 'students');
      const collectionData = await getDocs(collectionName);
      const data = collectionData.docs.map(doc => doc.data());
      res.send(data);
   } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching students data");
   }
});

app.listen(3000, () => {
   console.log("Server is running at port 3000");
});