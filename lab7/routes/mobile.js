var express = require('express');
var router = express.Router();
var MobileModel = require('../models/MobileModel');
var BrandModel = require('../models/BrandModel');

//URL: localhost:3001/mobile
router.get('/', async (req, res) => {
   var mobiles = await MobileModel.find({}).populate('brand');
   //Path: views/mobile/index.hbs
   res.render('mobile/index', { mobiles });
})

router.get('/add', async (req, res) => {
   var brands = await BrandModel.find({});
   res.render('mobile/add', { brands });
})

router.post('/add', async (req, res) => {
   var mobile = req.body;
   await MobileModel.create(mobile);
   res.redirect('/mobile');
})

router.get('/delete/:id', async (req, res) => {
   await MobileModel.findByIdAndDelete(req.params.id);
   res.redirect('/mobile');
})

module.exports = router;