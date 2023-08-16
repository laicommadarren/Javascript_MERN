const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Player name required"],
        minlength: [3, "Player name minimum length is 3 characters"]
    },
    prefPosition : {
        type: String, default: "unspecified"
    },
    status: {
        type: String, default: "undecided"
    }
}, { timestamps: true });


module.exports.Player = mongoose.model('Player', PlayerSchema);