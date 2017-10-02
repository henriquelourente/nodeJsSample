'use scrict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller')
const authService = require('../services/auth-service');

router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', authService.authorize, controller.refreshToken);
router.get('/', controller.get);
router.get('/admin/:id', controller.getById);

module.exports = router;