const express=require('express')
const router=express.Router();

const User=require('../models/Users')

router.get('/',(req,res)=>{
    res.render('createUser')
})
router.post('/',async (req,res)=>{
    const {username,fullName,email,phone}=req.body;
    const newUser=new User({
        username,
        fullName,
        email,
        phone
    });
    await newUser.save();
    res.redirect("/");
})
module.exports=router