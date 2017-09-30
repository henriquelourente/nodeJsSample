'use scrict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller')

router.post('/', controller.post);
router.get('/', controller.get);
router.get('/admin/:id', controller.getById);

module.exports = router;