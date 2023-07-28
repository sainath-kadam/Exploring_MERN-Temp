// In the routes/dataRoutes.js file, define the routes for handling data-related operations:

// routes/dataRoutes.js

const express = require('express');
const Data = require('../Models/dataSchema');

const router = express.Router();

// Middleware to handle duplicate key errors
const handleDuplicateKeyError = (err, res) => {
  const field = Object.keys(err.keyValue)[0];
  const value = err.keyValue[field];
  res.status(409).json({ error: `Duplicate key: ${field} '${value}' already exists.` });
};

// Get all data
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Add data
router.post('/', async (req, res) => {
  const { name, department } = req.body;
  const newData = new Data({ name, department });

  try {
    await newData.save();
    res.json({ message: 'Data added successfully' });
  } catch (err) {
    if (err.code === 11000) {
      handleDuplicateKeyError(err, res);
    } else {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  }
});

module.exports = router;
