const Product = require('../models/Products');

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const Categories = require('../models/Categories');
const { parse } = require('dotenv');

exports.getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find();
        res.status(200).json({
            success: true,
            data: products,
        });
    } catch(error){
        res.status(500).json({
            success: false,
            message: 'Lỗi lấy sản phẩm',
            error: error.message
        });
    }
};

exports.getProductById = async(req, res) =>{
    try{
        const product = await Product.findOne({id:req.params.id});
        if(!product){
            return res.status(404).json({
                success: false,
                message: 'Không thấy sản phẩm'
            });
        }
        res.status(200).json({
            sucess: true,
            data: product
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'Lỗi khi lấy dữ liệu product',
            error: error.message
          });
    }
};

exports.getProductsByCategory = async(req,res) =>{
    try {
        const category = await Categories.findOne({name:req.params.name});
        const product = await Product.find({categoryId:category.id});
        if(!product){
            return res.status(404).json({
                sucess: false,
                message: 'Không có sản phẩm theo category này'
            })
        }
        else
        {
            return res.status(200).json({
                success: true,
                data: product
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Lỗi khi lấy dữ liệu product',
            error: error.message
          });
    }
}