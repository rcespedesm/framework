/**
 * Pre-Conditions
 * @module preconditions
 */
var resource = require('../../database/resource.js');
var location = require('../../database/location.js');
var room = require('../../database/room.js');
/**
 * Call the function for to insert a new resource by DB
 * @param {JSON} resourceToInsert - JSON containing the resource structure
 * @param {function} callback - Function for to manage the resource item created
 */
var insertResource = function(resourceToInsert, callback){
	resource.insertResource(resourceToInsert, callback);
};
exports.insertResource = insertResource;

/**
 * Call the function for to insert a new location by DB
 * @param {JSON} locationToInsert - JSON containing the new location structure
 * @param {function} callback - Function for to manage the location item created
 */
var insertLocation = function(locationToInsert, callback){
	location.insertLocation(locationToInsert, callback);
};
exports.insertLocation = insertLocation;


/**
 * Add Resource to a Room By Id
 * @param {function} callback - Function for to manage the account in JSON format
 * @param {JSON} resourceToInsert - JSON containing the resource structure
 * @param {function} callback - Function for to manage the resource item created
 */
var addResourceToRoom = function(roomId,resourceToInsert, callback){
	room.addResourceToRoom(roomId,resourceToInsert, callback);
};
exports.addResourceToRoom = addResourceToRoom;