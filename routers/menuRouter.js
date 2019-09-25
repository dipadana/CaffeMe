const routes = require('express').Router();
const menuController = require('../controllers/menuController');

//HOME
routes.get('/', menuController.allMenu)


//=================CRUD MENU=============//


//create
routes.get('/menus/add', (req, res) => {
    let errors = []

    for (const key in req.query) {
        errors.push(req.query[key])
    }
    res.render('newMenu', {errors})
})
routes.post('/menus/add', menuController.create)


//edit & update
routes.get('/menus/edit/:id', menuController.edit)
routes.post('/menus/edit/:id', menuController.update)


//delete
routes.get('/menus/delete:id', menuController.delete)



module.exports = routes;