var express = require('express');
var router = express.Router();
var MobileModel = require('../models/MobileModel');

//URL: localhost:3001/mobile
router.get('/', async (req, res) => {
   var mobiles = await MobileModel.find({}).populate('brand');
   //Path: views/mobile/index.hbs
   res.render('mobile/index', { mobiles });
})

module.exports = router;