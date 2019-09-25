const routes = require('express').Router();
const menuController = require('../controllers/menuController');

routes.get('/', menuController.allMenu)

module.exports = routes;