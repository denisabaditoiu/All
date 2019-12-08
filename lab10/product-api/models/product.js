const configuration  = require('./../config/configuration.json');
const Sequelize = require('sequelize');

const DB_NAME = configuration.database.database_name;
const DB_USER = configuration.database.username;
const DB_PASS = configuration.database.password;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Database connection success!');
}).catch(err => {
    console.log(`Database connection error: ${err}`);
});


class Product extends Sequelize.Model { };

Product.init({
    identifier: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'products'
});

Product.sync({force: true});

module.exports = {
    sequelize,
    Product
}