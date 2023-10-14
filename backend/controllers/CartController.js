const CartItem = require('../models/CartItem');
const Product = require('../models/Product');


// Add to cart function
exports.addToCart = async (req, res) => {
  try {
    const { id, quantity } = req.body; //post id and quantity

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const cartname = await CartItem.findOne({ where: { id } });

    // Condition if same id item add again 
    if (cartname) {
      cartname.quantity += quantity;
      await cartname.save();
    }
    else {
      await CartItem.create({
        id,
        quantity,
      });
    }

    res.json({ message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.removeFromCart = async (req, res) => {
  try {
    const { id } = req.body; // in body put id

    const cartname = await CartItem.findOne({ where: { id } });

    if (!cartname) {
      return res.status(404).json({ error: 'Item not found in the cart' });
    }

    if (cartname.quantity > 1) {
      cartname.quantity -= 1;
      await cartname.save();
    } else {
      await cartname.destroy();
    }

    res.json({ message: 'Item removed from the cart' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all item that is add in cart
exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll({
      include: Product,
    });
    res.json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
