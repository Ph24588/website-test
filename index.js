// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// find things in public folder
app.use(express.static('public'));

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// UX PROJECTS
// Amazon
app.get('/amazon', function(req, res) {
    res.render('pages/amazon');
});
// Apple Music
app.get('/apple-music', function(req, res) {
    res.render('pages/apple-music');
});
// Pupper
app.get('/pupper', function(req, res) {
    res.render('pages/pupper');
});
// Agio
app.get('/agio', function(req, res) {
    res.render('pages/agio');
});
// Cooleaf
app.get('/cooleaf', function(req, res) {
    res.render('pages/cooleaf');
});

// VISUAL PROJECTS
// SSRL
app.get('/ssrl', function(req, res) {
    res.render('pages/ssrl');
});
// Ocean Plastics
app.get('/ocean-plastics', function(req, res) {
    res.render('pages/ocean-plastics');
});
// Alserkal Arrows
app.get('/alserkal-arrows', function(req, res) {
    res.render('pages/alserkal-arrows');
});
// UGA Hacks
app.get('/uga-hacks', function(req, res) {
    res.render('pages/uga-hacks');
});
// Shape Animations
app.get('/shape-animations', function(req, res) {
    res.render('pages/shape-animations');
});
// AstroVisual
app.get('/astrovisual', function(req, res) {
    res.render('pages/astrovisual');
});

app.listen(5000);
console.log('5000 is the magic port');