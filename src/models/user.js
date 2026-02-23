const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
    userName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true

    },

    password:{
        type:String,
        require:true,
        minlength:6
    }

})


const UserModels = new mongoose.model("user_Authentication", userSchema)

module.exports = UserModels