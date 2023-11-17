const express = require('express')
const router = express.Router()

//render ra trang home (views/index.hbs)
router.get('/', (req, res) => {
  res.render('index')
})

router.get('/greenwich', (req, res) => {
  res.render('greenwichvietnam')
})

router.get('/demo', (req, res) => {
  var city = 'Hà Nội'
  var district = 'Cầu Giấy'
  var street = '2 Phạm Văn Bạch'
  var image = 'https://vcdn-vnexpress.vnecdn.net/2022/06/03/Image-249300564-ExtractWord-0-8746-7982-1654231437.png'
  var year = 2023  //integer
  var graduate = true //boolean
  res.render('demo',
    {
      image : image,
      university: 'Greenwich Vietnam',
      city,
      district,
      duong: street,
      year,
      graduate
    })
})

router.get('/test', (req, res) => {
  var countries = ['Vietnam', 'Singapore', 'Thailand', 'Malaysia', 'Indonesia']
  var sports = ['Football', 'Badminton', 'Swimming', 'Voleyball']

  res.render('country', { countries, sports })
})

router.get('/admin', (req, res) => {
  res.render('admin', { layout : 'admin_layout.hbs'})
})

module.exports = router