// routes/articles.js
const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

// POST request to create a new article
router.post('/', articlesController.createArticle);

module.exports = router;
