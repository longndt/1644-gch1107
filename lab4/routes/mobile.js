var express = require('express');
var router = express.Router();

var MobileModel = require('../models/MobileModel');

router.get('/', async (req, res) => {
   // retrieve data from "mobile" collection
   // SQL: SELECT * FROM mobile
   var mobiles = await MobileModel.find({});

   //console.log(mobiles);
   //res.send(mobiles);
   res.render('mobile', { mobiles })
})

module.exports = router;