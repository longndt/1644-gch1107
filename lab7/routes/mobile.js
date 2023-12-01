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

router.get('/customer', async (req, res) => {
   var mobiles = await MobileModel.find({}).populate('brand');
   //Path: views/mobile/index.hbs
   res.render('mobile/list', { mobiles });
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

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var mobile = await MobileModel.findById(id);
   var brands = await BrandModel.find({});
   res.render('mobile/edit', { mobile, brands });
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var mobile = req.body;
   try {
      await MobileModel.findByIdAndUpdate(id, mobile);
      console.log('update succeed !');
   } catch (err) {
      console.log('update failed. Error: ' + err);
   }
   res.redirect('/mobile');
})

router.get('/sort/asc', async (req, res) => {
   //SQL: SELECT * FROM mobiles ORDER BY model
   var mobiles = await MobileModel.find().populate('brand').sort({ model: 1 });
   res.render('mobile/index', { mobiles })
})

router.get('/sort/desc', async (req, res) => {
   //SQL: SELECT * FROM mobiles ORDER BY model DESC
   var mobiles = await MobileModel.find().populate('brand').sort({ model: -1 });
   res.render('mobile/index', { mobiles })
})

router.post('/search', async (req, res) => {
   var keyword = req.body.keyword;
   //SQL: SELECT * FROM mobiles WHERE model LIKE '%keyword%'
   var mobiles = await MobileModel.find({ model: new RegExp(keyword, "i") }).populate('brand');
   res.render('mobile/index', { mobiles })
})

module.exports = router;