var express = require('express')
var router = express.Router()

//URL : localhost:3000/fpt
router.get('/', (req, res) => {
   //render ra view: views/fpt/index.hbs
  res.render('fpt/index')
})

module.exports = router