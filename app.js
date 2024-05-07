const express=require('express')
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();

const User=require('./models/Users')

mongoose.connect(process.env.mongo_connect)
.then(()=>{
    console.log("Connected to database");
    
    
})

.catch((err)=>{
    console.log("error connecting to db",err);
})

app.set("view engine", "ejs")
app.use('/static', express.static("static"))
app.use(express.urlencoded({extended:false}))

const HomeRoute=require('./routes/homeRoute')
const CreatePost=require('./routes/createPost')

// async function createUser(){
//     const newUser=new User({
//         username:"Atul",

//     })
//     await newUser.save()
//     .then(()=>{
//         console.log("new user added ", newUser.username);
//     })
//     .catch((err)=>{
//         console.log("Error adding user");
//     })

// }
// createUser();

app.use("/",HomeRoute)
app.use("/create-post",CreatePost)

app.listen(3000,()=>{
    console.log("listening to port 3000");
})