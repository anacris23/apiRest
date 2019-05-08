const express = require ('express')

const routes = express.Router()
const


routes.get('/products', ProductController.index)
routes.get('/products', ProductController.store)
routes.get('/products:id', ProductController.update)
routes.get('/products/:id', ProductController.delete)


module.exports = routes;
