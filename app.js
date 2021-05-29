const express = require('express');
const app = express();
const PORT = 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))

//routes
app.get('/', function (req, res) {
    res.send('hello world')
});

//start the server
app.listen(PORT, () => console.log(`API running on localhost:${PORT}`));