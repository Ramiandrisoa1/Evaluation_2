const express = require('express');
const {
  addSalarie,
  getSalarie,
  getSalarieByEmail,
} = require('../controllers/salarie.controller');

const router = express.Router();

router.post('/add-salarie', addSalarie);
router.get('/list-salarie', getSalarie);
router.get('/search/:email', getSalarieByEmail);

module.exports = { routes: router };
