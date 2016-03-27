var request = require('../Request/request.js');
var room =require('../../lib/BuildRoutes/routes_rooms.js');
var config = require('../../config/config.json');
var headers = require('../../config/headers.json');
var headersArray = [];

var postRoomResource = function(IdRoom, body, callback){
    var endPoint = room.putURI(IdRoom) + "/resources?type=bulk";
    var authorization = config.typeAuthentication.jwt;
    var dataRequest = {"Authorization" : authorization, "body" : body};

    request.buildRequest("post", endPoint, dataRequest, function(err, res){
        callback(err, res);
    });
};
exports.postRoomResource = postRoomResource;

var getRoom = function(callback){
    var endPoint = room.getURI();
    request.buildRequest("get", endPoint, function(err, res){
        callback(err, res);
    });
};
exports.getRoom = getRoom;

var getRoomID = function(ID, callback){
    var endPoint = room.getURI_Id(ID);
    request.buildRequest("get", endPoint, function(err, res){
        callback(err, res);
    });
};
exports.getRoomID = getRoomID;

var getRoomIDResources = function(ID, callback){
    var endPoint = room.getURI_Id(ID) + "/resources";
    request.buildRequest("get", endPoint, function(err, res){
        callback(err, res);
    });
};
exports.getRoomIDResources = getRoomIDResources;

var getRoomIDResourcesID = function(roomID, resourceID, callback){
    var endPoint = room.getURI_Id(roomID) + "/resources/" + resourceID;
    console.log(endPoint);
    request.buildRequest("get", endPoint, function(err, res){
        callback(err, res);
    });
};
exports.getRoomIDResourcesID = getRoomIDResourcesID;
/*
var delRoomIDResourcesID = function(roomID, resourceID, callback){
    var endPoint = room.getURI_Id(roomID) + "/resources/" + resourceID;
    console.log(endPoint);
    request.buildRequest("del", endPoint, function(err, res){
        callback(err, res);
    });
};
exports.delRoomIDResourcesID = delRoomIDResourcesID;*/

var putRoom = function(IdPut, body, callback){
    var endPoint = room.putURI(IdPut);
    var authorization = config.typeAuthentication.jwt;
    var dataRequest = {"Authorization" : authorization, "body" : body};

    request.buildRequest("put", endPoint, dataRequest, function(err, res){
        callback(err, res);
    });
};
exports.putRoom = putRoom;

var putRoomResource = function(roomID, resourceID, body, callback){
    var endPoint = room.putURI(roomID)+ "/resources/" + resourceID;
    var authorization = config.typeAuthentication.jwt;
    var dataRequest = {"Authorization" : authorization, "body" : body};

    request.buildRequest("put", endPoint, dataRequest, function(err, res){
        callback(err, res);
    });
};
exports.putRoomResource = putRoomResource;

