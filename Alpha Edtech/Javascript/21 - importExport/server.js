const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const employees = require('./routes/modulos.js');

app.use('/', cors({origin: 'http://localhost:8080'}), employees);

app.listen(port);
