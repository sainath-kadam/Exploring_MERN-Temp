// models/article.js
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
