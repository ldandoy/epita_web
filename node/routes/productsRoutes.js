const { v4: uuidv4 } = require('uuid')

const productModel = require('../models/productSchema')

const express = require('express')
const Router = express.Router()

let products = []

Router.get('/', (req, res, next) => {
    productModel.find()
    .then(products => {
        res.status(200).send(products);
    })
    .catch(error => next(error))
})

Router.get('/:productId', (req, res, next) => {
    const productId = req.params.productId

    productModel.findOne({
        _id: productId
    })
    .then(product => {
        res.status(200).send(product)
    })
    .catch(error => next(error))

    /*const index = req.params.index
    res.status(200).send(products[index])*/
})

Router.post('/', function (req, res, next) {
    /*let product = req.body
    product.id = uuidv4();
    products.push(product)*/

    let product = new productModel({
        name: req.body.name,
        price: req.body.price
    })

    product.save()
    .then(product => {res.status(200).send(product)})
    .catch(error => {next(error)});

    res.status(200).send(product)
})

Router.put('/:productId', function (req, res, next) {
    const productId = req.params.productId
    
    productModel.findOneAndUpdate({
        _id: productId
    }, {
        name: req.body.name,
        price: req.body.price
    })
    .then(product => res.status(200).send(product))
    .catch(error => next(error))
    
    /*products.forEach(product, index => {
        if (product.id == productId) {
            products[index] = req.body
        }
    });
    res.status(200).send(req.body)*/
})

Router.delete('/:productId', function (req, res, next) {
    const productId = req.params.productId
    
    productModel.findOneAndDelete({
        _id: productId
    }).then(product => {
        res.status(200).send('Product well deleted !')
    })
    .catch(error => next(error))

    /*products = products.filter(product => {
        if (product.id != productId) {
            return product
        }
    })
    res.status(200).send(products)*/
})

module.exports = Router