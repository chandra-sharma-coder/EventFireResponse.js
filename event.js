//Import Events Module
var events = require('events');

//Create and eventEmitter object
var eventEmitter = new events.EventEmitter();

//Create an Event handler as fllows;
var connectHandler = function connected() { 
    console.log('connection successful.....111');

    // Fire the data_received event 
    eventEmitter.emit('data_received');
}

//Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
    console.log('Data received Successfully......444');
});

//Fire the connection event 
eventEmitter.emit('connection');

console.log('Program Ended.');


