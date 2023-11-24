var mongoose = require('mongoose');
var StudentSchema = mongoose.Schema({
   name: String,
   email: String,
   birthday: Date,
   gender: String,
   department: String,
   image: String
});
var StudentModel = mongoose.model("students", StudentSchema);
module.exports = StudentModel;