const routes = require('express').Router();
const OrderController = require('../controllers/orderController');

routes.get('/', OrderController.allMenuPage);
routes.post('/', OrderController.addMenu);
routes.get('/test', OrderController.testOrder);


module.exports = routes;