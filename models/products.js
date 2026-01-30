const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:[true,"price must be provided"]
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.9
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi"],
            message:`{VALUE} is not supported`
        }
    },
    category:{
        type:String,required:true
    }, 
    image:{
        type: [String], // Array of strings for multiple images
        required: true // Consider making this required
    },
    description:{
        type:String,required:true
    },reviews:{
            type:String,
            required:true
    },stock:{
        type:Number,
        default:10000
    },colors:
    [{
        type:String
    }]
})

const ProductModel=mongoose.model('Product',productSchema);
module.exports=ProductModel;
