const express = require("express");
const app = express();
const porta =  3000;
app.use(express.static('public'));

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Methods', "*");
    next();
  }
app.use(allowCrossDomain);

//GET number
app.get('/number/', (req, res) => {
    const ms = parseInt(Math.random() * (5000 - 1000) + 1000);
    const num = parseInt(Math.random() * (100 - 1) + 1);
    setTimeout(() => {res.send(`Número aleatório: ${num}`)} , ms);
});

app.listen(porta, () => {
	console.log('index.js funcionando!!!');
});
