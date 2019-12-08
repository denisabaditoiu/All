const express = require('express');
const router = express.Router();

const { createProduct, getAllProducts, getProductsByCategory } = require('./../controller/product');


router.post('/product', createProduct);
router.get('/product', getAllProducts);
router.post('/product/category', getProductsByCategory);


module.exports = router;