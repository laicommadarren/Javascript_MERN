const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "Product title required"]
    },
    price : {
        type: Number,
        required: [true, "Product price required"]
    },
    description : {
        type: String,
        required: [true, "Product description required"]
    }
}, { timestamps: true });


module.exports.Product = mongoose.model('Product', ProductSchema);

