var request = require('../Request/request.js');
var location =require('../../lib/BuildRoutes/routes_location.js');
var config = require('../../config/config.json');
var headers = require('../../config/headers.json');
var headersArray = [];

var getLocations = function(callback){
    var endPoint = location.getURI();
    var dataRequest = {};

    request.buildRequest("get", endPoint, function(err, res){
        callback(err, res);
    });
};
exports.getLocations = getLocations;

var getLocationsID = function(ID, callback){
    var endPoint = location.getURIID(ID);
    var dataRequest = {};

    request.buildRequest("get", endPoint, function(err, res){
        callback(err, res);
    });
};
exports.getLocationsID = getLocationsID;

var postLocation = function(body, callback){
    var endPoint = location.postURI();
    var authorization = config.typeAuthentication.jwt;
    var dataRequest = {"Authorization" : authorization, "body" : body};

    request.buildRequest("post", endPoint, dataRequest, function(err, res){
        callback(err, res);
    });
};
exports.postLocation = postLocation;

var putLocation = function(ID, body, callback){
    var endPoint = location.getURIID(ID);
    var authorization = config.typeAuthentication.jwt;
    var dataRequest = {"Authorization" : authorization, "body" : body};

    request.buildRequest("put", endPoint, dataRequest, function(err, res){
        callback(err, res);
    });
};
exports.putLocation = putLocation;