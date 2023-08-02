// controllers/articlesController.js


// : Implementing different functions for various HTTP methods like GET, POST, PUT, DELETE, etc.

// The controller, also known as a route handler, is responsible for processing the incoming request
// from the client and generating an appropriate response. It typically handles business logic, data
//retrieval/manipulation, and deciding what response to send back to the client.

const Article = require('../models/article');

const createArticle = async (req, res) => {
  try {
    const { title, article, name } = req.body;
    const newArticle = new Article({ title, article, name });
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  createArticle,
};
