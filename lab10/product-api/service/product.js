const { Product } = require('./../models/product');

const product = {
    create: async (product) => {
        try {
            const result = await Product.create(product);
            return result;    
        } catch(err) {
           throw new Error(err.message); 
        }
    },
    getAll: async () => {
        try {
            const products = await Product.findAll();
            return products;
        } catch(err) {
            throw new Error(err.message);
        }
    },
    getByCategory: async (category) => {
        try {
            const products = await Product.findAll({category: category});
            return products;
        } catch(err) {
            throw new Error(err.message);
        }
    }
}

module.exports = product;