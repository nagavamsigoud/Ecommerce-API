const express=require("express");
const app=express();
const cors =require("cors")
const connectDB=require("./db/connect")
const Product=require("./models/products.js")
const port=process.env.PORT ||  9000;

const products_routes=require("./routers/products.js");

app.use(cors());
app.use(express.json());    

app.use("/images",express.static("uploads"));

app.get("/",(req,res)=>{
    res.send("API is started");
});


//middleware
app.use("/api/products",products_routes);


const start=async()=>{
    try{
        await connectDB();
        app.listen(port,()=>{
            console.log(`${port} Yes i am Connected`);
        });
    }catch(error){
        console.log(error);
    }
};
start();


