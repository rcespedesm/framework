var generateValues = function(){
    var value = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 16; i++ ) {
        value += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return value;
};
exports.generateValues = generateValues;

var generateCapacity = function(){
    var value = "";
    var possible = "0123456789";
    for( var i=0; i < 3; i++ ) {
        value += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return value;
};
exports.generateCapacity = generateCapacity;

var generator_resource = require('../utils/generator_resource.js');
exports.generator_resource = generator_resource;

var generator_room = require('../utils/generator_room.js');
exports.generator_room = generator_room;

var generator_location = require('../utils/generator_location.js');
exports.generator_location = generator_location;