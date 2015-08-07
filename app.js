var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/runningMan', function (req, res, next) {
    res.render('runningMan');
});

app.use('/charts', function (req, res, next) {
    res.render('charts');
});

app.use('/mu', function (req, res, next) {
    res.render('materialUi')
});

module.exports = app;