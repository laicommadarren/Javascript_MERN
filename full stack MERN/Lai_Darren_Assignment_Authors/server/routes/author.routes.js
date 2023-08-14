const AuthorController = require('../controllers/author.controller');
const { Author } = require('../models/author.model');
module.exports = function (app) {
    app.get('/api', AuthorController.index);
    // app.get('/api/authors/:id', AuthorController.getAuthor);
    app.get('/api/authors/:id', AuthorController.getAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.post('/api/authors', AuthorController.createAuthor);
    app.patch('/api/authors/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
}