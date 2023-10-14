const { DataTypes } = require('sequelize');
const db = require('../db.js');

const Product = db.define('product', {
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
});

module.exports = Product;
