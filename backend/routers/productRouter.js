import express from 'express';
import data from '../data.js';
import Product from '../models/productModel.js';
import expressAsyncHandler from 'express-async-handler';

const productRouter = express.Router();

productRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdProducts = await Product.insertMany(data.products)
}))