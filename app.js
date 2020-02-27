var express = require('express');
var app = express();
var cors = require('cors')

var weatherRouter = require('./routes/weather')

app.use(cors())
app.use(express.json());
app.use('/api', weatherRouter)

app.listen(3002);

module.exports = app;
