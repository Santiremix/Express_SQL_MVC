const express = require('express');
const ProductController = require('../Controllers/ProductController');
const router = express.Router();

//Creo la Tabla Products
router.get('/createtable', ProductController.create);

//Añadir dos nuevos Productos desde el Postman
router.post("/addProduct", ProductController.addProduct);

//Endpoint para actualizar/editar un producto
router.put('/id/:id', ProductController.actProduct);

//Endpoint que muestre todos los productos
router.get('/getProducts', ProductController.showProd);

//Endpoint que permita seleccionar un producto por su id
router.get('/selectWithId/:id', ProductController.selectWithId);

//Endpoint que muestre de forma descendente los products
router.get('/ordenDesc', ProductController.orderProducts);

//Endpoint donde puedas buscar un producto por su nombre 
router.get('/selectWithName/:title', ProductController.showProdByName);

//Endpoint para eliminar un producto por su id
router.delete('/delete/:id', ProductController.deleteProdById);

module.exports = router;