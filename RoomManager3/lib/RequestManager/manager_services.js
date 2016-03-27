var request = require('../Request/request.js');
var services =require('../../lib/BuildRoutes/routes_services.js');
var config = require('../../config/config.json');
var headers = require('../../config/headers.json');
var headersArray = [];

var getServices = function(callback){
    var endPoint = services.getURI();
    var dataRequest = {};

    var authorization = config.typeAuthentication.jwt;
    var dataRequest = {"Authorization" : authorization};

    request.buildRequest("get", endPoint, dataRequest, function(err, res){
        callback(err, res);
    });
};
exports.getServices = getServices;

