var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', async (req, res) => {
  var student = req.body;
  //SQL : INSERT INTO student ...
  await StudentModel.create(student);
  res.render('student', { student})
})


//render input form
router.get('/input', (req, res) => {
  res.render('input')
})

router.post('/output', (req, res) => {
  //get input data from client through form
  var data = req.body;
  //display input data
  console.log(data);
  //res.send(data);
  //render output page
  res.render('output',{ data })
})

router.get('/hello', (req, res) => {
  res.render('hello')
})

router.post('/hello', (req, res) => {
  var hello = "Hello " + req.body.name + " ! ";
  res.send(hello);
})

router.get('/welcome/:name/:age', (req, res) => {
  var data = req.params;
  var name = data.name;
  var age = data.age;
  var output = "Welcome " + name + " to Greenwich Vietnam. You are " + age + ' years old';
  res.send(output);
})

//1. render form for user to input
router.get('/login', (req, res) => {
  res.render('login');
})

//2. receive and process form data
router.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  var check = "<h1>Login succeed !</h1>";
  //check login
  if (email == "admin@fpt.com.vn" && password == "admin123")
    check = "<h1>Login failed !</h1>";
  res.send(check);
})

router.get('/test', (req, res) => {
  var year = 2023;
  res.render('test', { year })
})

module.exports = router;
