// Add constants
const express = require("express")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//Mongo Stuff ------------------------
const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'pAppData';
// Create a new MongoClient
const client = new MongoClient(dbUrl);

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
});
//End mongo stuff (may need to move this to another location though)

//---------------------------------

//set up app object
const app = express();

//Dont exactly knwo why I need these but including just in case
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files
app.use('/static', express.static('public'));

//Set view engine
app.set("views engine", 'pug');

//Route handler
const mainRoutes = require('./routes');

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
    res.render('error');
});



app.listen(3000, () => {
    console.log("The application is running now.... All gravy!")
})