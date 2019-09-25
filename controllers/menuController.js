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

}

module.exports = MenuController;