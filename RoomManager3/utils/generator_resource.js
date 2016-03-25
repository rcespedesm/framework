var generator = require('../utils/generator.js');
var resource = {
    "name": "",
    "customName": "",
    "fontIcon": "fa fa-windows",
    "from": "",
    "description": ""
};



var generateResource = function(){
    resource.name = generator.generateValues();
    resource.customName = generator.generateValues();
    resource.description = generator.generateValues();
    return resource;
};

exports.generateResource = generateResource;

