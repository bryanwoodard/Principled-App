//Code imported from previous treehouse flashcards app --- edit to make own version

const express = require('express');
const router = express.Router();
const handler = require('../handlers/handle');

//Track Schema
var Track = require('../models/track');

//Principle Schema 
var Principle = require('../models/principle');


////////////////////////////Routes/////////////////////////////////

//Home Page
router.get('/', (req, res, next) => {
    console.log("this is the /home page!") 
    return res.render("home");
});

// Tracks page - displays all the tracks from db
router.get('/tracks', (req, res) => {
    //check cookie if signed in
        // if not return to homepage
    //Get tracks and principles from db (will i need to add db vars in this one file too?)
    //Store in an object
    //Pass object into the render function \
    console.log("this is the /tracks page!") ; 
    return res.render('tracks');
});

//Account Page
router.get('/account', (req, res) => {
    console.log("this is the /account page!")
    return res.render('account');
    
});

//Add a new track to the db.  
//Data will be sent from ajax on the page and will also give confirmation success response
router.post('/addtrack', (req, res) => {
    // recieve object from post
    // add it to db
    // Track.create()
});


//Add a new principle to the db.  
//Data will be sent from ajax on the page and will also give confirmation success response
router.post('/addprinciple', (req, res) => {
    // recieve object from post
    // add it to db;
    //Principle.create()
});

//View All principles for a specific track based on query param
router.post('/viewprinciples', (req, res) => {
    // look at query param
    // display all of them on another page
});


//Actually start the track and send the messages.  Will be triggered by the form on page. 
//Data will be sent from ajax on the page and will also give confirmation success response
router.post('/startTrack', (req, res) => {
    // res.clearCookie('username');
    // res.redirect('/hello');
    // Twilio Functionality below + plus interval fix
    //Twilio Integration:
    const accountSid = 'AC0246cd63f7df56173a3ee27f965d562b';
    const authToken = '08b87d2a011517bcd9c6eb98744883cc';
    const client = require('twilio')(accountSid, authToken);

    // Twilio Function to send messages:
    // client.messages
    //     .create({
    //         body: msg,
    //         from: '+18587369481', // twilio number
    //         to: '+16193003379'
    //     })
    //     .then(message => console.log(message.sid))
    //     .done();
});

//Signup
router.post('/signup', (req, res) => {
    //Take value from form
    // check if everything is there
    // insert into db
    //redirect to '/confirmation';
    //User.create()
});

//Signin
router.get('/signin', (req, res) => {
    // recieve object from post
    // check if it is valid
    // if so then redirect to '/tracks'
    return res.redirect('/tracks');
    
});


//Function to Log out 
router.get('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/home');
});




module.exports = router;