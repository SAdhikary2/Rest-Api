const express=require('express');
const { getAllproduct } = require('../controllers/productControllers');
const router=express.Router();



router.route('/').get(getAllproduct)

module.exports =router;