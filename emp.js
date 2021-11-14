const mongoose = require("mongoose");

const schema = mongoose.Schema({
  emp_id: String,
  name: String,
  email: String,
  ph_no: Number,
  age:Number,
  password: String,
  experiance: String,

});

const empModal = mongoose.model("employee", schema);

module.exports = empModal;
