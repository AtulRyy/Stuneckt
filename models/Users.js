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
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posts'
      }],
    followers:[{
        type:String
    }],
    fullName:{
        type:String,
        
    },
    phone:{
        type:String
    },
    email:{
        type:String
    }
})

module.exports=mongoose.model("User",UserSchema)