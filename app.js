var Express = require('express');
var app = Express();

app.use('/', function (req, res, next) {
    res.send('hello express')
})

module.exports = app;