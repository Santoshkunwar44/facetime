const mongoose  = require("mongoose")
const CallSchema = mongoose.Schema({
    caller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    type:{
        type:String,
        enum:["Audio"|"Video"]
    },
    duration:{
        type:Number
    },
    success:{
        type:Boolean,
    }

},{timestamps:true})

module.exports = mongoose.model("Call",CallSchema) 