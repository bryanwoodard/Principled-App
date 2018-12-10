// Add constants
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var cookieParser = require('cookie-parser')

//mongodb connection
mongoose.connect('mongodb://localhost:27017/principled');
var db = mongoose.connection;

//mongo error
db.on('error', console.error.bind(console, 'connection error:'));

//parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Make use of cookies
app.use(cookieParser());

// Serve static files
app.use('/static', express.static('public'));

//Set view engine
app.set("view engine", 'pug');
app.set('views', __dirname + '/views');

//Route handler
const routes = require('./routes/index');

//Route Handler
app.use("/", routes);

//404 handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//Error Handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    //return res.send('error');
});



app.listen(3000, () => {
    console.log("The application is running now.... All gravy!")
})