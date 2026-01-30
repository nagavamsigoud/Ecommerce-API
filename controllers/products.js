const  fs =require("fs")
const ProductModel = require("../models/products");
const Product=require("../models/products");

const getAllProducts=async(req,res)=>{
    const {_id,name,company,price,featured,sort,image,colors}=req.query;
    const queryObject={};
    if(_id){
        queryObject._id=_id;
    }
    if(name){
        queryObject.name=name;
    }
    if(company){
        queryObject.company=company;
    }
    if(price){
        queryObject.price=price;
    }
    if(featured){
        queryObject.featured=featured;
    }
    if(image){
        queryObject.image=image;
    }
    if(featured)
    {
        queryObject.featured=featured;
    }
    if(colors){
        queryObject.colors=colors;
    }
    let result = Product.find(queryObject);
    if(sort){
        let sortFix=sort.replace(","," ");
        queryObject.sort=sortFix;
    }
    
    try {
        const myData = await result;
        res.status(200).json(myData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }

};

// Upload multiple images
const addimage = async (req, res) => {
    // Check if multiple images are uploaded
    let image_filename = req.files.map((file) => file.filename);
  
    const product = new ProductModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      company: req.body.company,
      featured: req.body.featured,
      reviews: req.body.reviews,
      stock: req.body.stock,
      // Store array of image filenames
      image: image_filename,
      colors: req.body.colors,
    });
  
    try {
      await product.save();
      res.json({
        success: true,
        message: "Images added",
        imgUrls: image_filename.map(
          (filename) => `http://localhost:9000/images/${filename}`
        ),
      });
    } catch (e) {
      console.log(e);
      res.json({ success: false, message: "Error uploading images" });
    }
  };
const getSingleProduct=async(req,res)=>{
    const id=req.params.id;
    try{
        const product=await ProductModel.findOne({_id:id})
        res.send(product)
    }catch(e){
        console.log(e)
    }
}

module.exports={getAllProducts,addimage,getSingleProduct}
