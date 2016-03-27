var request = require('../Request/request.js');
var resource =require('../../lib/BuildRoutes/routes_resource.js');
var config = require('../../config/config.json');
var headers = require('../../config/headers.json');
var headersArray = [];

var getResource = function(callback){
    var endPoint = resource.getURI();
    var dataRequest = {};

    request.buildRequest("get", endPoint, function(err, res){
        callback(err, res);
    });
};
exports.getResource = getResource;

var postResource = function(resourceBody, callback){
    var endPoint = resource.getURI();
    var authorization = config.typeAuthentication.jwt;
    var dataRequest = {"Authorization" : authorization, "body": resourceBody};

    request.buildRequest("post", endPoint, dataRequest, function(err, res){
        callback(err, res);
    });
};
exports.postResource = postResource;

var putResource = function(IdPut, body, callback){
    var endPoint = resource.putURI(IdPut);
    var authorization = config.typeAuthentication.jwt;
    var dataRequest = {"Authorization" : authorization, "body" : body};

    request.buildRequest("put", endPoint, dataRequest, function(err, res){
        callback(err, res);
    });
};
exports.putResource = putResource;

var delResource = function(IdDelete, callback){
    var endPoint = resource.delURI(IdDelete);
    var authorization = config.typeAuthentication.jwt;
    var dataRequest = {"Authorization" : authorization};

    request.buildRequest("del", endPoint, dataRequest, function(err, res){
        callback(err, res);
    });
};
exports.delResource = delResource;

