const express = require('express');
const cors = require('cors');
const db = require("./config.js");
const { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc } = require('firebase/firestore');
const app = express();

app.use(express.json());
app.use(cors());

//READ ALL DATA
app.get('/mobile', async (req, res) => {
   try {
      const mobileRef = collection(db, 'mobiles');  //notes: "mobiles" is collection (table) name
      const mobileSnapshot = await getDocs(mobileRef);
      const mobileList = mobileSnapshot.docs.map(doc => doc.data());
      res.send(mobileList);
   } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching mobiles data: " + error.message);
   }
});

//READ DATA BY ID
app.get('/mobile/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const docRef = doc(db, 'mobiles', id);
      const mobileSnapshot = await getDoc(docRef);
      if (mobileSnapshot.exists()) {
         const mobile = mobileSnapshot.data();
         res.send(mobile);
      } else {
         res.status(404).send("Mobile data not found");
      }
   } catch (error) {
      console.error("An error occurred:", error);
      res.status(500).send("Error fetching mobile data: " + error.message);
   }
});

//CREATE NEW DATA
app.post('/mobile', async (req, res) => {
   try {
      const newMobile = req.body;
      const newDocRef = doc(collection(db, 'mobiles'));
      await setDoc(newDocRef, newMobile);
      res.status(201).send("Create new mobile succeed !");
   } catch (error) {
      console.error(error);
      res.status(400).send("Error creating a new mobile: " + error.message);
   }
});

//UPDATE EXISTING DATA
app.put('/mobile/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const updatedData = req.body;
      const docRef = doc(db, 'mobiles', id);
      await updateDoc(docRef, updatedData);
      res.send('Update mobile succeed !');
   } catch (error) {
      console.error(error);
      res.status(400).send("Error updating mobile: " + error.message);
   }
});

//DELETE EXISTING DATA
app.delete('/mobile/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const docRef = doc(db, 'mobiles', id);
      await deleteDoc(docRef);
      res.send("Delete mobile succeed !");
   } catch (error) {
      console.error(error);
      res.status(400).send("Error deleting mobile: " + error.message);
   }
});

//listen port
app.listen(3000);