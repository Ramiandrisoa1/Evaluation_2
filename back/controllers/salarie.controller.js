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

const getSalarie = async (req, res) => {
  try {
    const salarie = await Salarie.find({});
    return res.status(201).json(salarie);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addSalarie,
  getSalarie,
};
