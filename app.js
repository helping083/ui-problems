/* eslint-disable no-undef */
const express = require('express');
const app = express();
const api = require('./routes');
const PORT = 3000;
const path = require('path');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', api);
//start the server
app.listen(PORT, () => console.log(`API running on localhost:${PORT}`));