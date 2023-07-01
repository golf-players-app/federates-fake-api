const Federate = require("../models/Federate.model.js");

module.exports.listByPlayer = async (req, res, next) => {
  try {
    const { name, surnameOne, surnameTwo } = req.body;
    const filter = {};
    if (name !== undefined) {
      filter.name = name;
    }
    if (surnameOne !== undefined) {
      filter.surnameOne = surnameOne;
    }
    if (surnameTwo !== undefined) {
      filter.surnameTwo = surnameTwo;
    }
    console.log(filter);
    const federates = await Federate.find(filter);
    return res.status(200).json(federates);
  } catch (error) {
    next(error);
  }
};

module.exports.listByFederatedNumber = async (req, res, next) => {
  try {
    const { federatedNumber } = req.body;
    const federate = await Federate.findOne({ federatedNumber: federatedNumber });
    return res.status(200).json(federate);
  } catch (error) {
    next(error);
  }
};
