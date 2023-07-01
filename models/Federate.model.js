const { Schema, model } = require("mongoose");

const federateSchema = new Schema({
  name: {
    type: String,
  },
  surnameOne: {
    type: String,
  },
  surnameTwo: {
    type: String,
  },
  federatedNumber: {
    type: String,
  },
  handicap: {
    type: Number,
  },
});

module.exports = model("Federate", federateSchema);
