const {Menu} = require('../models');

class MenuController {

  static allMenu(req,res){
    Menu.findAll({order : ["id"]})
    .then(allMenus => {
      
      // res.send(allMenus)
      res.render('pages/menu/menu', {allMenus})
      
    })
    .catch(err => {
      res.send(err);
    })
  }

  static create(req, res) {
    Menu.findOrCreate({where : {
      name : req.body.menu_name,
      price: req.body.price
    }})
    .then( () => {
      res.redirect('/menu')
    })
    .catch(err => {
      let url = ''
      err.errors.forEach((error, index) => {
        url += `err${index}=${error.message}&`
      })
      res.redirect(`/menu/menus/add?${url}` )
    })
  }

  static editPage(req, res) {
    Menu.findByPk(req.params.id)
    .then(selectedMenu => {
      console.log(selectedMenu);
      // console.log(req.params.id);
      
      
      res.render('pages/menu/editMenu', {selectedMenu})
    })
    .catch(err => {
      res.send(err.message)
    })
  }

  static update(req, res) {
    console.log(req.body, "=================");
    Menu.update({
      
      name : req.body.menu_name,
      price : req.body.price
    }, {
      where : {
        id : req.params.id
      }
    })
    .then(() => {
      res.redirect('/menu')
    })
    .catch(err => {
      res.render('error')
    })
  }

  static delete() {
    Menu.destroy({where : {
      id : req.params.id
    }})
    .then(() => {
      res.redirect('/menu')
    })
    .catch(err => {
      res.render('error')
    })
  }


}

module.exports = MenuController;