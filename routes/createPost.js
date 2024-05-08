const express=require('express')
const router=express.Router();

const Users=require('../models/Users');
const Posts = require('../models/Posts');

router.get("/:id",async (req,res)=>{
    const users=await Users.find({})
    const mainUser=await Users.findById(req.params.id)
    res.render("createPost",{users:users,mainUser:mainUser})
})
router.post("/:id",async(req,res)=>{
    const {title,content}=req.body;
    const newPost=new Posts({
        title,
        content,
        createdBy:req.params.id
    })
    await newPost.save();
    res.redirect("/");
})

module.exports=router;