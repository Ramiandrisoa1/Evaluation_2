const express = require('express');
const { addSalarie, getSalarie } = require('../controllers/salarie.controller');

const router = express.Router();

router.post('/add-salarie', addSalarie);
router.get('/list-salarie', getSalarie);

module.exports = { routes: router };
