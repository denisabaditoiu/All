const express = require('express');
const app = express();

app.locals.employees = [
    {
        name: 'Doe',
        surname: 'John',
        salary: 10000,
        currency: 'RON'
    }, 
    {
        name: 'Dane',
        surname: 'Jane',
        salary: 15000,
        currency: 'RON'
    }
];

app.get('/employees', (req, res) => {
    res.status(200).json(app.locals.employees);
});

app.listen(8080, () => {
    console.log('Server started on port 8080...');
});

module.exports = app;