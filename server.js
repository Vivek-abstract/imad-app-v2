var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
    user: 'vivek-abstract',
    host: 'http://db.imad.hasura-app.io',
    database: 'vivek-abstract',
    password: process.env.DB_PASSWORD
}


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config)
app.get('/test-db', function(req, res) {
    pool.query('SELECT * FROM test', function(err,result) {
        if(err) {
            res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(result));
    });
})

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/prof1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'prof1.jpg'));
});

app.get('/icon-fb.png', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'icon-fb.png'));
});

app.get('/icon-g+.png', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'icon-g+.png'));
});

app.get('/icon-git.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'icon-git.png'));
});

app.get('/bgimg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'bgimg.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
