const { Product } = require('../models/product.model')

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    // edit above and below
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => console.log(err))
            // response.json(err))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
    .then(updatedProduct => response.json(updatedProduct))
    .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
}