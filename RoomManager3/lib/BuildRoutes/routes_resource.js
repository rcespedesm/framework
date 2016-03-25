var config = require('../../config/config.json');
var rootURI = config.rootURI;
var endPoint = '{root}/resources/{complement}';
var newEndPoint;
var getURI = function(){
    return gpURI();
};
exports.getURI = getURI;

var postURI = function(){
    return gpURI();
};
exports.postURI = postURI;

var gpURI = function(){
    newEndPoint = endPoint.replace('/{complement}', '');
    return newEndPoint.replace('{root}', rootURI);
};

var delURI = function(IdDelete){
    return dpURI(IdDelete);
};
exports.delURI = delURI;

var putURI = function(IdUpdate){
    return dpURI(IdUpdate);
};
exports.putURI = putURI;

var dpURI = function(ID){
    newEndPoint = endPoint.replace('{complement}', ID);
    return newEndPoint.replace('{root}', rootURI);
};