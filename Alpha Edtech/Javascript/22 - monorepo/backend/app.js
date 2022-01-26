const ani = require('./components/aniversariante.js');
const set = require('./components/setor.js');
const ram = require('./components/ramal.js');
const post = require('./components/post.js');

const port = 3000;
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/aniversariantes', (req, res) => res.send(ani(req.query.month)));

app.get('/setor', (req, res) => res.send(set(req.query.sector)));

app.get('/ramal', (req, res) => res.send(ram(req.query.ramal)));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/json',(request,response) => {
    //console.log(request.body);
    response.send(post(request.body))
});


app.listen(port, () => console.log('Example app listening on port 3000!'));