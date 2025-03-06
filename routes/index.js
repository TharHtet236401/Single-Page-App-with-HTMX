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

router.post('/articles', (req, res) => {  
  const {name, body} = req.body;
  const article = {
    id: articles.length + 1,
    name,
    body
  };
  articles.push(article);
  setTimeout(() => {
    res.render('partials/list', {articles: articles});
  }, 3000);
});

router.get('/about', (req, res) => {
  res.render('about', {title: 'About Us'});
});

router.get('/contact', (req, res) => {
  res.render('contact', {title: 'Contact Us'});
});


router.post('/articles/search', (req, res) => {
  const {search} = req.body;
  const results = articles.filter(article => article.name.toLowerCase().includes(search.toLowerCase()));
  res.render('partials/list', {articles: results});
});

export default router;

