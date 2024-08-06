const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');



router.get('/',productsController.getAllProducts);
router.post('/',productsController.addProducts);
router.put('/',productsController.updadteProducts);
router.patch('/',productsController.updadteProducts);
router.delete('/',productsController.deleteProducts);










module.exports = router;