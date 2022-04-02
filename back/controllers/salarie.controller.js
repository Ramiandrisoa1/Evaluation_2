const Salarie = require('../models/salarie');

const addSalarie = async (req, res) => {
  try {
    const salarie = new Salarie(req.body);
    salarie.save();
    return res.status(201).json({
      message: 'succès',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addSalarie,
};
