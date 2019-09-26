const express = require('express')
const app = express()
const port = 4000
const menuRouter = require('./routers/menuRouter');
const orderRouter = require('./routers/orderRouter');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use('/public', express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/menu', menuRouter);
app.use('/order', orderRouter);

app.listen(port, () => console.log(`Cafe Me listening on port ${port}!`)) 