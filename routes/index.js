//Code imported from previous treehouse flashcards app --- edit to make own version

const express = require('express');
const router = express.Router();
debugger;
const handler = require('../handlers/handle');

//Twilio Integration:
const accountSid = 'AC0246cd63f7df56173a3ee27f965d562b';
const authToken = '08b87d2a011517bcd9c6eb98744883cc';
const client = require('twilio')(accountSid, authToken);

router.get('/', (req, res) => {
    debugger;
    //if (req.query) {
    var num = req.query.num;
    var msg = req.query.msg;

    var spit = function(arg) {
        console.log(`Patoooie, I spit on your grave ${arg}`);
    }

    console.log(num + " : " + msg);

    // client.messages
    //     .create({
    //         body: msg,
    //         from: '+18587369481', // twilio number
    //         to: '+16193003379'
    //     })
    //     .then(message => console.log(message.sid))
    //     .done();
    //}
    res.send("its done");
    var time = setTimeout(spit, 10000, 'ricky!');
    return time();

});

router.get('/hello', (req, res) => {
    // const name = req.cookies.username;
    // if (name) {
    //     res.redirect('/');
    // } else {
    //     res.render('hello');
    // }

});

router.post('/hello', (req, res) => {
    // res.cookie('username', req.body.username);
    // res.redirect('/');
});

router.post('/goodbye', (req, res) => {
    // res.clearCookie('username');
    // res.redirect('/hello');
});

module.exports = router;