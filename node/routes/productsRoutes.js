const { v4: uuidv4 } = require('uuid')

const express = require('express')
const Router = express.Router()

let products = []

Router.get('/', (req,res) => {
    res.status(200).send(products)
})

Router.get('/:index', (req,res) => {
    const index = req.params.index
    res.status(200).send(products[index])
})

Router.post('/', function (req, res) {
    let product = req.body
    product.id = uuidv4();
    products.push(product)
    res.status(200).send(product)
})

Router.put('/:productId', function (req, res) {
    products.forEach(product, index => {
        if (product.id == productId) {
            products[index] = req.body
        }
    });
    res.status(200).send(req.body)
})

Router.delete('/:productId', function (req, res) {
    const productId = req.params.productId
    products = products.filter(product => {
        if (product.id != productId) {
            return product
        }
    })
    res.status(200).send(products)
})

module.exports = Router