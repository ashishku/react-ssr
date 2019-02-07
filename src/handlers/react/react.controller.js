const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const reactService = require('./react.service');

// routes
router.get('*', renderHTML);
module.exports = router;

function renderHTML(req, res, next) {
  const data = reactService();
  res.render('index', {
    title: 'Server Side Rendered React App',
    ...data
  });
}