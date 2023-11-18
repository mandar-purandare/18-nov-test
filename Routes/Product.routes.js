import { Router } from "express";
import { addProduct, getAllProducts, getSingleProduct } from "../Controllers/Product.controllers.js";

const productRoutes = Router();

productRoutes.get('/get-all-products', getAllProducts);
productRoutes.post('/add-product',addProduct);
productRoutes.post('/get-single-product',getSingleProduct);

export default productRoutes;