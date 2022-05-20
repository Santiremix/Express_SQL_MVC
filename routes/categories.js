const express = require('express');
const CategoriesController = require('../Controllers/CategoriesControllers');
const ProductController = require('../Controllers/ProductController');
const router = express.Router();

//Creo la Tabla Categories
router.get('/createtable2', CategoriesController.create); 

//Añadir dos nuevas Categorías
router.post("/addCategory", CategoriesController.addCategory);

//Endpoint para actualizar una categoria
router.put('/idCat/:id', CategoriesController.updateCategory);

//Endpoint que muestre todas las categorías
router.get('/getCategories', CategoriesController.showCategories);

//Endpoint que permita seleccionar una categoría por su id
router.get('/selectCategoryWithId/:id', CategoriesController.selectCatById);



module.exports = router;