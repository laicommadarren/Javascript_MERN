const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Author name required"],
        minlength: [3, "Author name minimum length is 3 characters"]
    }
}, { timestamps: true });


module.exports.Author = mongoose.model('Author', AuthorSchema);