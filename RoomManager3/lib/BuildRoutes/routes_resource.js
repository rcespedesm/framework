var config = require('../../config/config.json');
var rootURI = config.rootURI;
var endPoint = '{root}/resources/{complement}';

var getURI = function(){
    return URI();
};
exports.getURI = getURI;

var postURI = function(){
    return URI();
};

var URI = function(){
    endPoint = endPoint.replace('/{complement}', '');
    return endPoint.replace('{root}', rootURI);
};
exports.postURI = postURI;