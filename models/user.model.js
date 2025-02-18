const mongoose = require('mongoose');


// 1) allow only validated data on our server
// 2) enforce structure
// 3) error handling
// 4) security


//users -> username, age, email, roles, password, 

//email, password -> wrong email  -> adaarshverma

//now whenever anyone would be signing up, they will have to enter the data that is compliant with this schema


const userSchema = new mongoose.Schema({
  username: {
    type: [String, "Username should be a string"],
    required: [true, "Username is required to submit this form"],
    unique: [true, "Username should be unique"],
    trim: true,
    lowercase: true,
    minlength: [3, "Username should be atleast 3 character long"],
    maxlength: [20, "Username should be atmost 20 character long"],

  },
  age:{
   type: [Number, "Age should be a number value"],
   required: true,
   min: [5, "Pahle bade ho jaao"],
   max: [100, "Budhe ho gye ho"],
  },
  email: {
    type: String,
    required: [true, "Email should be unique"],
    trim: true,
    lowercase: true,
    validate: {
        validater: function(value){
            return value.includes("@");
        },
        message: "Email is not valid"
    }
  },
  role:{
    type: String,
    required: false,
    default: "user",
    enum:["user", "admin", "superadmin"]
},
password: {
    type: String,
    trim: true,
    required: true,
}
})

const User = mongoose.model("User", userSchema);

module.exports = User;