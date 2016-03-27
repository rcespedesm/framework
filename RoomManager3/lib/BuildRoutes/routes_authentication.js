var config = require('../../config/config.json');
var rootURI = config.rootURI;
var endPoint = '{root}/login';
/**
 * postURI is a function that is used to return an
 * specific endpoint("POST") for authentication service.
 * @returns {string}
 */
var postURI = function(){
    return endPoint.replace('{root}', rootURI);
};
exports.postURI = postURI;