var DBmanager = require('../database/dataBaseManager.js');
var mongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://172.20.208.66:27017/roommanager';
var table = 'services';

/**
 * Return all services
 * @param {Object} id - Service Id
 * @param {function} callbacK - function for handle the object
 */
var findService = function(id, callback){
	mongoClient.connect(url, function(err, db) {
		DBmanager.setTable(table);
		DBmanager.find(ObjectId(id), db, callback);
    });
};

/**
 * Return all services
 * @param {function} callbacK - function for handle the array
 */
var findAllServices = function(callback){
	mongoClient.connect(url, function(err, db) {
		DBmanager.setTable(table);
		DBmanager.findAll(db, callback);
    });
};

exports.findService = findService;
exports.findAllServices = findAllServices;