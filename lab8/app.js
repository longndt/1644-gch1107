const express = require('express');
const cors = require('cors');
const db = require("./config.js");
const { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc } = require('firebase/firestore');
const app = express();

app.use(express.json());
app.use(cors());

//READ ALL
app.get('/mobile', async (req, res) => {
   try {
      const mobilesRef = collection(db, 'mobiles');  //notes: "mobiles" is collection (table) name
      const mobilesSnapshot = await getDocs(mobilesRef);
      const mobilesList = mobilesSnapshot.docs.map(doc => doc.data());
      res.send(mobilesList);
   } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching mobiles data");
   }
});

//READ BY ID
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

//CREATE
app.post('/mobile', async (req, res) => {
   try {
      const newMobile = req.body;
      const newDocRef = doc(collection(db, 'mobiles'));
      await setDoc(newDocRef, newMobile);
      res.status(201).send({ id: newDocRef.id, ...newMobile });
   } catch (error) {
      console.error(error);
      res.status(400).send("Error creating a new mobile");
   }
});

//UPDATE
app.put('/mobile/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const updatedData = req.body;
      const docRef = doc(db, 'mobiles', id);
      await updateDoc(docRef, updatedData);
      res.send(`Mobile with ID ${id} updated`);
   } catch (error) {
      console.error(error);
      res.status(400).send("Error updating mobile");
   }
});

//DELETE
app.delete('/mobile/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const docRef = doc(db, 'mobiles', id);
      await deleteDoc(docRef);
      res.send(`Mobile with ID ${id} deleted`);
   } catch (error) {
      console.error(error);
      res.status(400).send("Error deleting mobile");
   }
});

app.listen(3000, () => {
   console.log("Server is running at port 3000");
});