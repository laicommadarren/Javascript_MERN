const UserController = require('../controllers/user.controller');
const { User } = require('../models/user.model');
module.exports = function (app) {
    app.get('/api', UserController.index);
    app.get('/api/users/:id', UserController.getUser);
    app.get('/api/users', UserController.getAllUsers);
    app.post('/api/users', UserController.createUser);
    app.patch('/api/users/:id', UserController.updateUser);
    app.delete('/api/users/:id', UserController.deleteUser)
}

// edit all