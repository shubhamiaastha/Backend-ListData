const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
  
    Name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },
    joining:{
        type:Date

    },
    count:{
        type:String
    }

   
},{timestamps:true})

module.exports = mongoose.model('User',UserSchema);
