/**
 * Room module
 * @module findRoom
 */
var DBmanager = require('../database/dataBaseManager.js');
var mongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://172.20.208.66:27017/roommanager';
var table = 'rooms';

/**
 * Find a specific room by ID in the database
 * @param {Object} id - Room Id
 * @param {function} callbacK - function for handle the object found
 */
var findRoom = function(id, callback){
	mongoClient.connect(url, function(err, db) {
		DBmanager.setTable(table);
		DBmanager.find(ObjectId(id), db, callback);
    });
};

/**
 * Return all rooms
 * @param {function} callbacK - function for handle the array
 */
var findAllRooms = function(callback){
	mongoClient.connect(url, function(err, db) {
		DBmanager.setTable(table);
		DBmanager.findAll(db, callback);
    });
};

/**
 * Return all rooms pertaining to a service
 * @param {Object} id - Service Id
 * @param {function} callbacK - function for handle the array
 */
var findAllRoomsOfOneService = function(serviceId, callback){
	mongoClient.connect(url, function(err, db) {
		DBmanager.setTable(table);
		DBmanager.findByParameters({"serviceId":ObjectId(serviceId)}, db, callback);
    });
};

exports.findRoom = findRoom;
exports.findAllRooms = findAllRooms;
exports.findAllRoomsOfOneService = findAllRoomsOfOneService;