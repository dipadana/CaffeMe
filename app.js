const express = require('express')
const app = express()
const port = 3000
const menuRouter = require('./routers/menuRouter');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use('/public', express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/menu', menuRouter);


app.listen(port, () => console.log(`Caffe Me listening on port ${port}!`)) 