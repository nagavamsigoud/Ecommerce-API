const express=require("express");
const multer=require("multer");
const router=express.Router();  

const {getAllProducts,addimage,getSingleProduct}=require("../controllers/products");

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

router.post("/uploads",upload.array("image",12),addimage)
router.route("/").get(getAllProducts);
router.route("/:id").get(getSingleProduct);


module.exports=router