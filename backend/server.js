// All needed 
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const cors = require('cors')

const app = express();
app.use(cors())

app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

const PORT =  5000;

// Check db is connected or not
db.sync()
    .then(() => {
        console.log('Database synced');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error syncing the database:', err);
    });
