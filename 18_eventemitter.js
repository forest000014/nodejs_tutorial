var events = require('events');
var eventEmitter = new events.EventEmitter();

var soundHandler = function () {
    console.log('I hear a sound');
}
var clickHandler = function () {
    console.log('click occured.');
}

eventEmitter.on('sound', soundHandler);
eventEmitter.on('click', clickHandler);

eventEmitter.emit('sound');
eventEmitter.emit('sound');
eventEmitter.emit('click');
eventEmitter.emit('sound');
eventEmitter.emit('click');
