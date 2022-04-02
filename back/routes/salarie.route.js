const express = require('express');
const { addSalarie } = require('../controllers/salarie.controller');

const router = express.Router();

router.post('/add', addSalarie);

module.exports = { routes: router };
