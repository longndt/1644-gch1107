var mongoose = require('mongoose');
var MobileSchema = mongoose.Schema({
   model: String,
   color: String,
   image: String,
   brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'brands'  // 'brands': collection
   }
});
//Relationship : mobiles (many) - brands (one)

var MobileModel = mongoose.model('mobiles', MobileSchema); // 'mobiles' : collection
module.exports = MobileModel;