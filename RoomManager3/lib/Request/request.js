var request = require('../../node_modules/superagent');
var config = require('../../config/config.json');
var headers = require('../../config/headers.json');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

var finishRequestGetDel = function(req, dataRequest, callback){
    if(arguments.length === 2)
        var callback = arguments[1];
    else
        req = req.set(headers.get.Authorization.name, headers.get.Authorization.jwt);


    req
        .end(function(err,res){
            callback(err, res);
        });
};

var finishRequestPostPut = function(req, dataRequest, callback){
    var auth = dataRequest.Authorization;

    if(auth === "jwt ")
        auth = headers.get.Authorization.jwt;
    else if(auth === "Basic ")
        auth = headers.get.Authorization.basic;
    else if(auth === "")
        auth = "";

        req = req
            .set(headers.get.ContentType.name, headers.get.ContentType.value);

        if(auth !== ""){
            req = req
                .set(headers.get.Authorization.name, auth);
        }

        req
        .send(dataRequest.body)
        .end(function(err,res){
            callback(err, res);
        });
};

var buildRequest = function(type, endPoint, dataRequest, callback){
    var req;
    if(arguments.length === 3)
        var newCallback = arguments[2];

    switch(type){
        case "post":
            req = request.post(endPoint);
            finishRequestPostPut(req, dataRequest, callback);
            break;
        case "put":
            req = request.put(endPoint);
            finishRequestPostPut(req, dataRequest, callback);
            break;
        case "get":
            req = request.get(endPoint);
            finishRequestGetDel(req, newCallback);
            break;
        case "del":
            req = request.del(endPoint);
            finishRequestGetDel(req, dataRequest, callback);
            break;
    }

};
exports.buildRequest = buildRequest;
