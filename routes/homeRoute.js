const express=require('express')
const router=express.Router();

const User=require('../models/Users');
const { default: mongoose } = require('mongoose');
const Posts = require('../models/Posts');

router.get("/",async(req,res)=>{
    const mainUser=await User.findOne({});
    res.redirect("/home/"+mainUser._id)
})
router.get("/home/:id",async (req,res)=>{
    const mainUser=await User.findById(req.params.id);
    const users=await User.find({})
    const posts=await Posts.find({}).populate('createdBy').sort({createdAt:-1})
    res.render("home",{users:users,posts:posts,mainUser:mainUser})
})

module.exports=router;