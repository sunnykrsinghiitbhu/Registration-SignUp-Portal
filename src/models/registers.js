const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
     FirstName :{
         type:String,
         required:true
     },
     LastName :{
        type:String,
        required:true
    },
    Email :{
        type:String,
        required:true,
        unique:false
        // match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  
    },
    Password :{
        type:String,
        required:true
    },
    ConfirmPassword :{
        type:String,
        required:true
    },



})

const Register = new mongoose.model("Register",employeeSchema);
module.exports = Register;




