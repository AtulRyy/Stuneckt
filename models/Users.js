const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    followerCount:{
        type:Number,
        default:0

    },
    followers:[{
        type:String
    }]
})

module.exports=mongoose.model("User",UserSchema)