import express from "express";
import asyncHandler from 'express-async-handler'
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (req,res) =>{
    const products = await Product.find({})
    if(products){
        res.json(products)
    }
})

const getProductById = asyncHandler(async (req,res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.send(product)
    }else {
        res.status(404)
        throw new Error('NOT FOUND, TRY ANOTHER ONE')
    }
})

export {getProducts,getProductById}