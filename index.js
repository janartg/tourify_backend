const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const {Enquire,Package,Destination} =require('./schema.js');
const app=express();



app.use(bodyParser.json())
app.use(cors());


async function connectToDB(){
    try{
        await mongoose.connect('mongodb+srv://jana:jana123@cluster0.vyvtto8.mongodb.net/Tourify?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Database is connected!!");
        const port=8000;
        app.listen(port,function(){
            console.log(`Listening on port ${port}....`);
        })
    }catch(error){
        console.log(error);
        console.log("Couldn't established DB connection");
    }
}
connectToDB();


// enquire details new

app.post('/enquire/new',async function(req,res){
    try{
        await Enquire.create({
            "name":req.body.name,
            "email":req.body.email,
            "phone":req.body.phone,
            "cityOfResidence":req.body.cityOfResidence,
            "destination":req.body.destination,
            "noOfPeople":req.body.noOfPeople,
            "date":req.body.date
        })
        res.status(201).json({
            "status":"success",
            "message" : "entry successfully added"
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            "status" : "failure",
            "message" : "entry not created",                        
            "error" : error
       })
    }
})

// get the enquire details

// app.get('/getPackages',async (req,res)=>{
//     try{
//         const packages=await Package.find().populate('destinationId)
//     }
// })


