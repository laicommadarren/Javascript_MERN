const PlayerController = require('../controllers/player.controller');
const { Player } = require('../models/player.model');
module.exports = function (app) {
    app.get('/api', PlayerController.index);
    app.get('/api/players/:id', PlayerController.getPlayer);
    app.get('/api/players', PlayerController.getAllPlayers);
    app.post('/api/players', PlayerController.createPlayer);
    app.patch('/api/players/:id', PlayerController.updatePlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer)
}