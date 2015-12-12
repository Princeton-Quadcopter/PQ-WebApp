// modules / config =================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var morgan = require('morgan');

var port = process.env.PORT || 8080; 

// connect to database ===========================================
mongoose.connect('mongodb://qc_user:qc_pass@ds043714.mongolab.com:43714/princeton_quadcopter'); // connect to our database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
  console.log('db opened');
});


// middleware =====================================================
// No idea what half of this stuff does but don't worry about it,
// it's just standard middleware
app.use(morgan('dev'));
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./app/routes')(app); // configure our routes
app.get('/manageRequests', function(req, res, next) {res.sendfile(__dirname + '/public/manageRequests.html');});
app.get('/track', function(req, res, next) {res.sendfile(__dirname + '/public/student.html');});

// start app ===============================================
app.listen(port);                           
console.log('Server started on port ' + port);

// expose app           
exports = module.exports = app;                         
