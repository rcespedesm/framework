var generateValues = function(){
    var value = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 16; i++ ) {
        value += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return value;
};
exports.generateValues = generateValues;

var generator_resource = require('../utils/generator_resource.js');
exports.generator_resource = generator_resource;