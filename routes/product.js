const express = require('express');
const upload = require('../libs/storage');
const { addProduct } = require('../controllers/productoController');
const api = express.Router();

api.post('/products', upload.single('image'), addProduct)

module.exports = api;