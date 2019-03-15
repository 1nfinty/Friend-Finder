//required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//express application + PORT
var app = express();
var PORT = process.env.PORT || 8080; //Heroku(any) or localhost

//middleware for parsing incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

//app routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//listening on PORT
app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT);
});
