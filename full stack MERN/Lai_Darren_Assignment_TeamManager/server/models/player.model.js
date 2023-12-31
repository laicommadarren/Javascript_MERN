const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const PlayerSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Player name required"],
        unique: true,
        minlength: [3, "Player name minimum length is 3 characters"]
    },
    nickname : {
        type: String,
        unique: true
    },
    prefPosition : {
        type: String,
        default: ""
    },
    status: {
        type: String,
        default: "undecided"
    }
}, { timestamps: true });

PlayerSchema.plugin(uniqueValidator, {message: '{PATH} already exists in database'})


module.exports.Player = mongoose.model('Player', PlayerSchema);