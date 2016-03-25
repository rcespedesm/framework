var request = require('../Request/request.js');
var authentication = require('../../lib/BuildRoutes/routes_authentication.js');
var config = require('../../config/config.json');
var headers = require('../../config/headers.json');
var headersArray = [];

var postLogin = function(callback){
    var endPoint = authentication.postURI();
    var body = {"username": config.username, "password": config.password, "authentication": "local"};

    var dataRequest = {"Authorization" : "", "body": body}


    request.buildRequest("post", endPoint, dataRequest, function(err, res){

        headers.get.Authorization.jwt = config.typeAuthentication.jwt + res.body.token;
        headers.get.Authorization.basic = config.typeAuthentication.basic + "TODO";
        callback(err, res);
    });
}
exports.postLogin = postLogin;
