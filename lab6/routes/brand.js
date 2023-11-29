var express = require('express');
var router = express.Router();
var BrandModel = require('../models/BrandModel');

router.get('/', async (req, res) => {
   var brands = await BrandModel.find({});
   res.render('brand/index', { brands });
})

module.exports = router;