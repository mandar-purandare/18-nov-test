import ProductModel from "../Models/Product.model.js";

export const addProduct = async (req,res) => {
    try{
        const {name, price, category, id} = req.body;
        if(!name || !price || !category || !id) return res.status(401).json({success:false, message:"All fields are mandatory"});

        const product = new ProductModel({
            name,
            price,
            category,
            id
        })

        await product.save();
        return res.status(201).json({success:true, message:"Product added successfully", product:{name: product.name, price: product.price, id: product.id}});
    }catch(error){
        return res.status(500).json({success:false, message: error.message});
    }
}

export const getAllProducts = async (req,res) => {
    try{
        const products = await ProductModel.find({});
        if(products.lenght === 0) return res.status(401).json({success:false, message:"No products found"});

        return res.status(200).json({success:true, products:products})
        
    }catch(error){
        return res.status(500).json({success:false, message: error.message});
    }
}

export const getSingleProduct = async (req,res) => {
    try{
        const {id} = req.body;
        if(!id) return res.status(401).json({success:false, message:"Id is not provided"});

        const product = await ProductModel.findById(id);
        if(!product) return res.status(401).json({success:false, message:"Product not found for this id"});

        return res.status(200).json({success:true, product:product});

    }catch(error){
        return res.status(500).json({success:false, message: error.message});
    }
}
   