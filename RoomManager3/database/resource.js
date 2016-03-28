var DBmanager = require('../database/dataBaseManager.js');
var mongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://172.20.208.61:27017/roommanager';
var table = 'resourcemodels';

var insertResource = function(resourceToInsert, callback){
	mongoClient.connect(url, function(err, db) {
		DBmanager.setTable(table);
		DBmanager.insert(resourceToInsert, db, callback);
    });
};

var findResource = function(id, callback){
	mongoClient.connect(url, function(err, db) {
		DBmanager.setTable(table);
		DBmanager.find(ObjectId(id), db, callback);
    });
};

var findAllResources = function(callback){
	mongoClient.connect(url, function(err, db) {
		DBmanager.setTable(table);
		DBmanager.findAll(db, callback);
    });
};

var removeResource = function(id, callback){
	mongoClient.connect(url, function(err, db) {
		DBmanager.setTable(table);
        DBmanager.remove(ObjectId(id), db, callback);
    });
};

exports.insertResource = insertResource;
exports.findResource = findResource;
exports.findAllResources = findAllResources;
exports.removeResource = removeResource;