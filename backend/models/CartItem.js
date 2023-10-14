const { DataTypes } = require('sequelize');
const db = require('../db');
const Product = require('./Product'); // Import the Product model

const CartItem = db.define('cart_item', {
  quantity: {
    type: DataTypes.INTEGER,
  },
});

CartItem.belongsTo(Product, {
  foreignKey: 'id'
});


module.exports = CartItem;
