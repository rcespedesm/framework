var config = require('../../config/config.json');
var rootURI = config.rootURI;
var endPoint = '{root}/services/{complement}';
var newEndPoint;

var getURI = function(){
    return gpURI();
};
exports.getURI = getURI;

var gpURI = function(){
    newEndPoint = endPoint.replace('/{complement}', '');
    return newEndPoint.replace('{root}', rootURI);
};

var getURI_Id = function(Id){
    return dpURI(Id);
};
exports.getURI_Id = getURI_Id;

var putURI = function(IdUpdate){
    return dpURI(IdUpdate);
};
exports.putURI = putURI;

var dpURI = function(ID){
    newEndPoint = endPoint.replace('{complement}', ID);
    return newEndPoint.replace('{root}', rootURI);
};