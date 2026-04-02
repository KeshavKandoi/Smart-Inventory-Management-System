import Product from "../models/Product";

// CREATE PRODUCT

export const createProduct=async(req,res)=>{
  try{
    const {name,price,quantity,supplier}=req.body;

    const product=new Product({
      name,
      price,
      quantity,
      supplier,
    });
    const savedProduct=await product.save();

    res.status(201).json(savedProduct)
  }catch(error){
    res.status(500).json({message:error.message})
  }
};


// GET ALL PRODUCT

export const getProduct=async(req,res)=>{
  try{
    const products=await Product.find();
    res.json(products)
  }catch(error){
    res.status(500).json({message:error.message});
  }
};

// GET SINGLE PRODUCT

export const getProductById=async(req,res)=>{
  try{
    const product=await Product.findById(req.params.id);

    if(!product){
      return res.status(404).json({message:"Product not found"})
    }
    res.json(product);
  }catch(error){
    res.status(500).json({message:error.message});
    
  }
};


// update product

export const updateProduct=async(req,res)=>{
  try{
    const updated=await Product.findByIdAndUpdate(req.params.id,req.body,
    {new:true}
    
  );
  if (!updated) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(updated);

  }catch(error){
    res.status(500).json({message:error.message});
  }
};

// delete product

export const deleteProduct=async(req,res)=>{
  try{
    const deleted= await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({message:"Product deleted"})
  }catch(error){
    res.status(500).json({message:error.message})
  }
};