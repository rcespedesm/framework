var config = require('../../config/config.json');
var rootURI = config.rootURI;
var endPoint = '{root}/resources/{complement}';

var getURI = function(){
    return gpURI();
};
exports.getURI = getURI;

var postURI = function(){
    return gpURI();
};
exports.postURI = postURI;

var delURI = function(IdDelete){
    return dpURI(IdDelete);
};
exports.delURI = delURI;

var putURI = function(IdDelete){
    return dpURI(IdDelete);
};
exports.putURI = putURI;

var gpURI = function(){
    endPoint = endPoint.replace('/{complement}', '');
    return endPoint.replace('{root}', rootURI);
};

var dpURI = function(IdDelete){
    endPoint = endPoint.replace('{complement}', IdDelete);
    return endPoint.replace('{root}', rootURI);
};