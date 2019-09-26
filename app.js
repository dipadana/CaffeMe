const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const menuRouter = require('./routers/menuRouter');
const orderRouter = require('./routers/orderRouter');
const session = require('express-session');
const {User} = require('./models');
app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use('/public', express.static('public'))

const loginMiddleware = (req,res,next) => {
  if(req.session.user){
    next()
  }
  else{
    res.redirect('/login')
  }
}

app.get('/login', (req,res) => {
  res.render('loginTest')
});

app.post('/login', (req,res) => {
  User.findOne({where : {
    username : req.body.username
  }})
  .then(data => {
    if(data){
      if(data.dataValues.password === req.body.password){
        req.session.user = req.body.username
        req.session.position = data.dataValues.position
        console.log(req.session)
        res.redirect('/')
      }
      else{
        res.redirect('/login/?err=passwordatauusersalah')
      }
    }
    else{
      res.redirect('/login/?err=passwordatauusersalah')
    }
  })
});

app.use(loginMiddleware)

app.get('/', (req, res) => {
  console.log(req.session)
  res.render('home')
})

app.use('/menu', menuRouter);
app.use('/order', orderRouter);

app.get('/logout', (req,res) => {
  req.session.destroy();
  res.redirect('/login');
})

app.listen(port, () => console.log(`Cafe Me listening on port ${port}!`)) 