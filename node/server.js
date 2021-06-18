require('dotenv').config()
const express = require('express')
const morgan  = require('morgan')
const cors    = require('cors')
const helmet  = require('helmet')

const productRoute = require('./routes/productsRoutes')
const authRoute = require('./routes/authRoutes')

const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/ErrorHandler')
const connectDB = require('./middlewares/connectDB')

connectDB()

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
app.use('/', authRoute)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`)
})