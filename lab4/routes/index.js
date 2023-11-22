var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  //res.send("<h1>Hello ExpressJS</h1>")
  var city = 'Hanoi';
  res.render("home", { year: '2023', city });
  // res.redirect('/mobile');
})

module.exports = router;
