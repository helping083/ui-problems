/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: 'views'
      });
});

router.get('/second', function (req, res) {
    res.sendFile('second.html', {
        root: 'views'
      });
});

router.get('/buy', function (req, res) {
    res.sendFile('but.html', {
        root: 'views'
      });
});

module.exports = router;