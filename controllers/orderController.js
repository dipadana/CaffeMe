const {Menu, Order, Customer} = require('../models');

class OrderController {

  static allMenuPage(req,res){
    Menu.findAll()
    .then(menu => {
      res.render('pages/orders/order',{menu});
    })
    .catch(err => {
      res,send(err);
    })
  }

  static addMenu(req,res){
    Customer.create({
      name: req.body.CustomerName,
      phone: req.body.phone,
      email: req.body.email
    })
    .then(() => {
      return Customer.findOne({where : {
        name: req.body.CustomerName,
        phone: req.body.phone,
        email: req.body.email
      }})
    })
    .then(customer => {
      let CustomerId = customer.dataValues.id
      let MenuId = req.body.MenuId
      let qty = [];
      for(let i = 0; i < req.body.qty.length; i++){
        if(req.body.qty[i] !== ''){
          qty.push(req.body.qty[i])
        }
      }

      let data = [];
      for(let i = 0; i < MenuId.length; i++){
        data.push({
          CustomerId: CustomerId,
          MenuId: MenuId[i],
          qty: qty[i]
        })
      }

      // res.send({CustomerId,MenuId,qty});
      return Order.bulkCreate(data)
    })
    .then(order => {
      res.send(order)
    })
    .catch(err => {
      res.send(err);
    })
  }

  static testOrder(req,res){
    Customer.findAll({include : Menu})
    .then(Customer => {
      res.send(Customer)
    })
  }

}

module.exports = OrderController;