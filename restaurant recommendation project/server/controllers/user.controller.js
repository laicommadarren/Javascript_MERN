const { User } = require('../models/user.model') // edit this
module.exports.index = (request, response) => {
    response.json({
        message: "Connected to Database"
    });
}
module.exports.createUser = (request, response) => {
    const { firstName, lastName, categoryPreferences } = request.body;
    User.create({
        firstName,
        lastName,
        categoryPreferences
    })
        .then(user => response.json(user))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllUsers = (request, response) => {
    User.find({})
        .then(users => response.json(users))
        .catch(err => response.status(400).json(err));
}

module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.status(400).json(err));
}

module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
    .then(updatedUser => response.json(updatedUser))
    .catch(err => response.status(400).json(err));
}

module.exports.deleteUser = (request, response) => {
    User.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.status(400).json(err));
}