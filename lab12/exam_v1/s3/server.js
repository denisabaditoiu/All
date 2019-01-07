const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let products = [
    {
        id: 0,
        productName: 'Samsung Galaxy S9',
        price: 4000
    },
    {
        id: 1,
        productName: 'Iphone XR',
        price: 3999
    }
];

app.get('/get-all', (req, res) => {
    res.status(200).send(products);
})

app.post('/add', (req, res) => {
    if(req.body.productName && req.body.price){
        let product = {
            id: products.length,
            productName: req.body.productName,
            price: req.body.price
        };
        products.push(product);
        res.status(200).send(product);
    } else {
        res.status(500).send('Error!');
    }
});

app.listen(8080, () => {
    console.log('Server started on port 8080...');
});