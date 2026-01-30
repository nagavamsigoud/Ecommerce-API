const mongoose=require("mongoose");

const username = encodeURIComponent('gnagavamsigoud834');
const password = encodeURIComponent('@Nagavamsi');
const clusterUrl = 'cluster0.vfh7ypp.mongodb.net';
const dbName = 'Cluster0';

const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
// mongodb+srv://gnagavamsigoud834:<db_password>@cluster0.vfh7ypp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const connectDB=async()=>{
    
    try {
        // Options like useNewUrlParser are no longer needed in modern Mongoose
        await mongoose.connect(uri);
        console.log(" Database connected successfully");
    } catch (err) {
        console.error(" Database connection error:", err.message);
        process.exit(1); 
    }    
}

module.exports=connectDB;