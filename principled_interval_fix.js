// set time out to send msgs on an interval
// set interval to check whether or not the interval has been stopped and stop it if not
// All code below will run in the callback function of a specific route
// WIll also need to render some page to let them know success or failure

//initial counter
var count = 0;

//array of principles 
    // either coming from form submission or a grab from the database
var arr = ['aaa','bbbb',"cccc",'ddddd','eeeee','fffff'];

// Start time for when to send the texts
// Will be translated from submission
var startTime = 500 ;

// Reminder interval to come from track submission.  To be translated
var intBtwPrin = 2000;


//flag to determine if current track is in prog from db, should update the db on the start of a track
// can also accept a value to make it true or false
// will need to refactor code though to look at the db submission
var alreadyInProg = function(val){
    if(!val){
        return false;
    }else{
        return true;
    }
}

//Function to check if the sends should continue
    // will check some database flag based on if there is a stop in there.
//alreadyInProg will be set to true if this track is already sending
    // will come from some db flag
var checkToCont = function(){
    if(count == arr.length || alreadyInProg() == true){
        return false;
    }else{
        return true;
    }
}

// function to send principle text to user from array
var sendPrinciple = function(principle_number){
    console.log(`Principle = ${arr[principle_number]} & count is ${count}`);
    count++;
}

//interval to send principle texts;
var interval = function(){
    var int = setInterval(
    function(){
        if(checkToCont() == true && alreadyInProg() !== true){
            sendPrinciple(count);
            console.log(`count is now at ${count}`);
        } else{
            clearInterval(int);
            console.log(`timer is done at ${count} iterations`);
            alreadyInProg = false;
        };
        
    }, intBtwPrin);
}

var declareInterval = setTimeout(interval, startTime);

var confirmText = function(){
    // text to user for confirmation
    if(count === 0 ){
        alreadyInProg(true);
    }
    console.log("you are set to recieve text at whatever time you put in.  Reply STOP to pause")
}
confirmText();

// render success template on a new page so that it cant be set again!
