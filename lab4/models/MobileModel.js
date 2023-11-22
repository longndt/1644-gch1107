var mongoose = require('mongoose')
var MobileSchema = mongoose.Schema(
   {
      name: String,
      brand: String,
      price: Number,
      image: String,
      video: String
   }
)
var MobileModel = mongoose.model("dien_thoai", MobileSchema, "mobile");
//Note: 3rd parameter is collection (table) name
module.exports = MobileModel;