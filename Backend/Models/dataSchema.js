//in the Models/dataScema.js file, define the Mongoose model for your data:

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
