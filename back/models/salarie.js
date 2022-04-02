const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salarie = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  poste: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model('salaries', salarie);
