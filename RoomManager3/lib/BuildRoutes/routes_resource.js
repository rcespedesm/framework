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

var delURI = function(){
    return dpURI();
};
exports.delURI = delURI;

var putURI = function(){
    return dpURI();
};
exports.putURI = putURI;

var gpURI = function(){
    endPoint = endPoint.replace('/{complement}', '');
    return endPoint.replace('{root}', rootURI);
};

var dpURI = function(ID){
    endPoint = endPoint.replace('{complement}', ID);
    return endPoint.replace('{root}', rootURI);
};