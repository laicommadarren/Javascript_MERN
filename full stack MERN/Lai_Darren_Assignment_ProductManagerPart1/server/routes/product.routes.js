const ProductController = require('../controllers/product.controller');
const { Product } = require('../models/product.model');
module.exports = function (app) {
    app.get('/api', ProductController.index);
    // app.get('/api/products/:id', ProductController.getProduct);
    app.get('/api/products/:id', ProductController.getProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/products', ProductController.createProduct);
    app.patch('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct)
}

