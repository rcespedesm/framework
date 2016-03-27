var config = require('../../config/config.json');
var rootURI = config.rootURI;
var endPoint = '{root}/locations/{complement}';
var newEndPoint;
/**
 * getURI is a function that is used to return an
 * specific endpoint("GET") for location service.
 * @returns {string}
 */
var getURI = function(){
    return gpURI();
};
exports.getURI = getURI;
/**
 * postURI is a function that is used to return an
 * specific endpoint("POST") for location service.
 * @returns {string}
 */
var postURI = function(){
    return gpURI();
};
exports.postURI = postURI;
/**
 * gpURI is a function that is used to build the
 * main endpoint for location service
 * @returns {string}
 */
var gpURI = function(){
    newEndPoint = endPoint.replace('/{complement}', '');
    return newEndPoint.replace('{root}', rootURI);
};

var getURIID = function(ID){
    return dpURI(ID);
};
exports.getURIID = getURIID;

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