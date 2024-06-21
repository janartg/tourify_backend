const mongoose=require('mongoose');

const enquireSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    cityOfResidence:{
        type:String
    },
    destination:{
        type:String
    },
    noOfPeople:{
        type:Number
    },
    date:{
        type:String
    }
},{versionKey:false})

const Enquire=mongoose.model('EnquireDetails',enquireSchema);


// Package databse schema

const packageSchema=new mongoose.Schema({
    packageName:{
        type:String,
    },
    price:{
        type:Number,
    },
    duration:{
        type:String,
    },
    imagePosterUrl:{
        type:String,
    },
    destinationIds:[{
        type:mongoose.Schema.Types.ObjectId,ref:'DestinationDetails',
    }]
})

const Package=mongoose.model('PackageDetails',packageSchema);

// Package database schema

const destinationSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    imageUrl:{
        type:String,
    }
});

const Destination=mongoose.model('DestinationDetails',destinationSchema);

module.exports={Enquire,Package,Destination};