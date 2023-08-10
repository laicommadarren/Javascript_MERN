const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    // _id : {
    //     type: String
    // },
    setup: {
        type: String,
        required: [true, "Joke setup required"],
        minlength: [10, "Joke setup must be at least 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "Joke punchline Required"],
        minlength: [3, "Joke punchline must be at least 3 characters"]
    }
},
{ timestamps: true }
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;