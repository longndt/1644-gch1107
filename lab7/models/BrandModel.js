var mongoose = require('mongoose');
var BrandSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         minlength: [3, 'brand name must be at least 3 characters'],
         maxlength: 20
      },
      country: String
   });
var BrandModel = mongoose.model('brands', BrandSchema);
module.exports = BrandModel;