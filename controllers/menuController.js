const {Menu} = require('../models');

class MenuController {

  static allMenu(req,res){
    Menu.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res,send(err);
    })
  }

  static create(req, res) {
    Menu.create({where : {
      menu_name : req.body.menu_name,
      price: req.body.price
    }})
    .then(newMenu => {
      res.redirect('/')
    })
    .catch(err => {
      let url = ''
      err.errors.forEach((error, index) => {
        url += `err${index}=${error.message}&`
      })
      res.redirect(`/menus/add?${url}` )
    })
  }

  static edit ()

}

module.exports = MenuController;