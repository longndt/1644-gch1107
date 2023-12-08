const express = require('express');
const db = require("./config.js");
const { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc } = require('firebase/firestore');
const app = express();
app.use(express.json());

//NOTE 1: Import and declare "cors" library to share API to front-end
const cors = require('cors');
app.use(cors());

//IMPORTANCE: set collection name
var collectionName = "mobiles";

//READ COLLECTION
app.get('/', async (req, res) => {
   try {
      const collectionRef = collection(db, collectionName);
      const collectionSnap = await getDocs(collectionRef);
      const collectionList = collectionSnap.docs.map(doc => doc.data());
      res.status(200).send(collectionList);
   } catch (error) {
      console.error(error);
      res.status(500).send("Error loading collection: " + error.message);
   }
});

//READ DOCUMENT
app.get('/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const documentRef = doc(db, collectionName, id);
      const documentSnap = await getDoc(documentRef);
      if (documentSnap.exists()) {
         const documentData = documentSnap.data();
         res.status(200).send(documentData);
      } else {
         res.status(404).send("Document not found !");
      }
   } catch (error) {
      console.error("An error occurred:", error);
      res.status(500).send("Error loading document: " + error.message);
   }
});

//CREATE DOCUMENT
app.post('/', async (req, res) => {
   try {
      const newDoc = req.body;
      const newDocRef = doc(collection(db, collectionName));
      await setDoc(newDocRef, newDoc);
      res.status(201).send("Create document succeed !");
   } catch (error) {
      console.error(error);
      res.status(400).send("Error creating document: " + error.message);
   }
});

//UPDATE DOCUMENT
app.put('/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const updatedData = req.body;
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, updatedData);
      res.status(200).send('Update document succeed !');
   } catch (error) {
      console.error(error);
      res.status(400).send("Error updating document: " + error.message);
   }
});

//DELETE DOCUMENT
app.delete('/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      res.status(200).send("Delete document succeed !");
   } catch (error) {
      console.error(error);
      res.status(400).send("Error deleting document: " + error.message);
   }
});

//NOTE 2: modify server port to deploy to cloud
app.listen(process.env.PORT || 3001);