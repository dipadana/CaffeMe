const routes = require('express').Router();
const OrderController = require('../controllers/orderController');

routes.get('/', OrderController.allMenuPage);
routes.post('/', OrderController.addMenu);

routes.get('/receipt/edit', OrderController.editPage);
routes.post('/receipt/edit', OrderController.edit);
routes.get('/receipt/delete', OrderController.delete);

routes.get('/receipt/:id', OrderController.receiptPage); // id = CustomerId

routes.post('/checkout', OrderController.checkout);


module.exports = routes;