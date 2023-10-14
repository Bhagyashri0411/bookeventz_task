const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController.js');

router.post('/add', CartController.addToCart);
router.get('/items', CartController.getCartItems);
router.post('/remove', CartController.removeFromCart);

module.exports = router;
