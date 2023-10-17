const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:[true,"This email is already used"],
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    creditMinute:{
        type:Number,
        default: 60 * 25
    }
},{timestamps:true})
module.exports = UserSchema("User",UserSchema)