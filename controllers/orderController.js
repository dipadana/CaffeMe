const {Menu, Order, Customer, Checkout} = require('../models');

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
    // Menambahkan data kedalam tabel customer,
    // agar IDnya bisa ditangkap
    let CustomerId;
    Customer.create({
      name: req.body.CustomerName,
      phone: req.body.phone,
      email: req.body.email
    })
    .then(() => {
      return Customer.findOne({where : {
        name: req.body.CustomerName,
        email: req.body.email
      }})
    })
    .then(customer => {
      // Menangkap semua data yang datang dari 
      // form pesanan dan ID Customer yang baru ditambahkan
      CustomerId = customer.dataValues.id
      let MenuId = req.body.MenuId
      let qty = [];
      // Menghapus semua string kosong yang 
      // datang dari form pesanan
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
      return Order.bulkCreate(data)
    })
    .then(orders => {
      res.redirect(`/order/receipt/${CustomerId}`)
    })
    .catch(err => {
      res.send(err);
    })
  }

  static receiptPage(req,res){
    let CustomerId = req.params.id
    Customer.findOne({where : {id:CustomerId},include:Menu})
    .then(customer => {
      // res.send(customer)
      res.render('pages/orders/receipt',{customer})
    })
    .catch(err => {
      res.send(err);
    })
  }

  static editPage(req,res){
    let CustomerId = req.query.CustomerId
    let MenuId = req.query.MenuId
    let qty = req.query.qty
    let MenuName = req.query.MenuName
    // res.send({CustomerId,MenuId,qty})
    res.render('pages/orders/editReceipt', {CustomerId,MenuId,qty,MenuName})
  }

  static edit(req,res){
    Order.update({
      qty : req.body.qty
    }, {
      where : {
        CustomerId : req.body.CustomerId,
        MenuId : req.body.MenuId
      }
    })
    .then(() => {
      res.redirect(`/order/receipt/${req.body.CustomerId}`)
    })
    .catch(err => {
      res.send(err);
    })
  }

  static edit(req,res){
    Order.update({
      qty : req.body.qty
    }, {
      where : {
        CustomerId : req.body.CustomerId,
        MenuId : req.body.MenuId
      }
    })
    .then(() => {
      res.redirect(`/order/receipt/${req.body.CustomerId}`)
    })
    .catch(err => {
      res.send(err);
    })
  }

  static delete(req,res){
    Order.destroy({
      where : {
        CustomerId : req.query.CustomerId,
        MenuId : req.query.MenuId
      }
    })
    .then(() => {
      // res.send('deleted')
      res.redirect(`/order/receipt/${req.query.CustomerId}`)
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
    .catch(err => {
      res.send(err);
    })
  }

  static checkout(req,res){
    let data = [];
    let totalSum;
    let dataCheckout;
    if(typeof req.body.MenuId === 'string'){
      data.push({
        MenuId : req.body.MenuId,
        MenuName : req.body.name,
        price : req.body.price,
        qty : req.body.qty,
        total : Number(req.body.price)*Number(req.body.qty),
        CustomerName : req.body.CustomerName,
        CustomerId : req.body.CustomerId
      })
    }
    else{
      for(let i = 0; i < req.body.MenuId.length; i++){
        data.push({
          MenuId : req.body.MenuId[i],
          MenuName : req.body.name[i],
          price : req.body.price[i],
          qty : req.body.qty[i],
          total : Number(req.body.price[i])*Number(req.body.qty[i]),
          CustomerName : req.body.CustomerName,
          CustomerId : req.body.CustomerId
        })
      }
    }
    Checkout.bulkCreate(data)
    .then(() => {
      return Checkout.sum('total',{where : {
        CustomerId : req.body.CustomerId
      }})
    })
    .then(sum => {
      totalSum = sum.toString()
      return Checkout.findAll({where : {
        CustomerId : req.body.CustomerId
      }})
    })
    .then(customerData => {
      dataCheckout = customerData
      Order.destroy({where : {
        CustomerId : req.body.CustomerId
      }})
    })
    .then(() => {
      res.send({dataCheckout,totalSum})
    })
    .catch(err => {
      res.send(err);
    })
  }

}

module.exports = OrderController;