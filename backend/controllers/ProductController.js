const Product = require('../models/Product');
const fs = require('fs');


exports.insertProductsFromJSON = (req, res) => {
  try {
    const rawData = fs.readFileSync('products.json');
    const products = JSON.parse(rawData);

    // Insert each product into the database
    products.forEach(async (product) => {
      await Product.create(product);
    });

    res.json({ message: 'Products inserted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.listProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
