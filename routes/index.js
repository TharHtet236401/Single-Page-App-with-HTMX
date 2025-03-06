import express from 'express';
import articles from '../data/articles.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'Product Listing', articles: articles});
});

router.get('/articles/:id', (req, res) => {
  const article = articles.find(article => article.id === parseInt(req.params.id));
  res.render('article', {title: article.name, article: article});
});

export default router;

