const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number, // Changed to Number with capital "N"
    required: true
  },
  district: String,
  subDistrict: String,
  residentialArea: String,
  apartmentNumber: String
});

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});

const Address = mongoose.model("Address", addressSchema);
const Login = mongoose.model("Login", loginSchema);

module.exports = {
  Address,
  Login
};
