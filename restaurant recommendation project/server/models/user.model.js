const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    // signup form
    firstName : {
        type: String,
        required: [true, "First name required"],
        minlength: [2, "First name minimum length is 2 characters"]
    },
    lastName : {
        type: String,
        required: [true, "Last name required"],
        minlength: [2, "Last name minimum length is 2 characters"]
    },
    // preferences
    categoryPreferences: {
        type: Object
    }

}, { timestamps: true });


module.exports.Author = mongoose.model('User', UserSchema);