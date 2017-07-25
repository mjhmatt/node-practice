var express = require('express');
var app = express();

var hbs = require('hbs');	

app.set('view engine', 'html');

app.engine('html', hbs.__express);

app.use(express.static('public'));

var blogEngine = require('./blog');
var aboutMe = require('./about')

app.listen(3000);

app.get('/', function(req, res) {
    res.render('index',{title:"My Blog", entries:blogEngine.getBlogEntries()});
});
 
app.get('/about', function(req, res) {
    res.render('about', {title:"About Me", about:aboutMe.getMeInfo()});
});
 
app.get('/article/:id', function(req, res) {
    var entry = blogEngine.getBlogEntry(req.params.id);
    res.render('article',{title:entry.title, blog:entry});
});