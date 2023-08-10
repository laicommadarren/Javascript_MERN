const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    // _id : {
    //     type: String
    // },
    setup : {
        type: String,
        min: [10, "Joke setup must be at least 10 characters"]
    },
    punchline : {
        type: String,
        min: [3, "Joke punchline must be at least 3 characters"]
    },
}, {timestamps:true});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;