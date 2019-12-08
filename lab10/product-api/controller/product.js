const productService = require('./../service/product');

const createProduct = async (req, res, next) => {
    const product = req.body;
    if(product.productName && product.category && product.price) {
        const result = await productService.create(product);
        res.status(201).send({
            message: 'Product added successfully.'
        });
    } else {
        res.status(400).send({
            message: 'Invalid product payload.'
        });
    }
}

const getAllProducts = async (req, res, next) => {
    try {
        const products = await productService.getAll();
        res.status(200).send(products);
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

const getProductsByCategory = async (req, res, next) => {
    try {
        const category = req.body.category;
        if(category) {
            try {
                const products = await productService.getByCategory(category);
                res.status(200).send(products);
            } catch(err) {
                res.status(500).send({
                    message: `Err occured: ${err.message}`
                })
            }
        } else {
            res.status(400).send({
                message: 'No category specified'
            })
        }
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        })
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductsByCategory
}