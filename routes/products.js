const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');



router.get('/',productsController.getAllProducts);
router.post('/',productsController.addProducts);
router.put('/:id',productsController.updateProductsPut);
router.patch('/:id',productsController.updateProductsPatch);
router.delete('/:id',productsController.deleteProducts);










module.exports = router;