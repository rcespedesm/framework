var config = require('../../config/config.json');
var rootURI = config.rootURI;
var endPoint = '{root}/login';

var postURI = function(){
    return endPoint.replace('{root}', rootURI);
};
exports.postURI = postURI;