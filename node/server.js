const express = require('express')
const morgan  = require('morgan')
const cors    = require('cors')
const helmet  = require('helmet')

const productRoute = require('./routes/productsRoutes')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).send('<h1>It works !</h1>')
})

app.use('/products', productRoute)

app.listen(3000, () => {
    console.log(`Server listen on http://localhost:3000`)
})