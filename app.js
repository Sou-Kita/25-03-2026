const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/inventory_db')
    .then(() => console.log('Connected MongoDB'))
    .catch(err => console.log(err));

const inventoryRoutes = require('./routes/inventory.routes');
app.use('/inventory', inventoryRoutes);
const productRoutes = require('./routes/product.routes');
app.use('/products', productRoutes);
app.listen(3000, () => {
    console.log('Server running on port 3000');
});