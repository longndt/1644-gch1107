var express = require('express');
var router = express.Router();
var BrandModel = require('../models/BrandModel');
var MobileModel = require('../models/MobileModel');

router.get('/', async (req, res) => {
   var brands = await BrandModel.find({});
   res.render('brand/index', { brands });
})

router.get('/add', (req, res) => {
   res.render('brand/add');
})

router.post('/add', async (req, res) => {
   var brand = req.body;
   await BrandModel.create(brand);
   res.redirect('/brand');
})

router.get('/detail/:id', async (req, res) => {
   var id = req.params.id;
   //SQL: SELECT * FROM mobiles WHERE brand = "id"
   var mobiles = await MobileModel.find({ brand : id }).populate('brand');
   res.render('brand/detail', { mobiles })
})

module.exports = router;