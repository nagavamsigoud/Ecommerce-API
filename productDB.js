const connectDB=require("./db/connect");
const Product =require("./models/products");
const productJson =require("./products.json")
const start=async()=>{
    try{
        await connectDB();
        await Product.create(productJson);
        console.log("success");
    }catch(error){
        console.log(error);
    }
};
start();