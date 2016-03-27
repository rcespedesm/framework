var expect = require('chai');
var request = require('../../lib/RequestManager/manager.js');
var generator = require('../../utils/generator.js');
describe("Suit: Room Resources Service", function(){

    this.slow(10000);
    this.timeout(10000);
    var room_ID = "56ec5e0a0004801c0ce00dc1";
    var resource_ID;
    var roomResourceId;
    var resourceBody;

    before(function(done){
        request.maut.postLogin(function(err, res){
            done();
        });
    });
    before(function(done){
        var resourceBody = generator.generator_resource.generateResource();
        request.mres.postResource(resourceBody, function(err, res){
            resource_ID = res.body._id;
            generator.generator_resource.setPropertiesResource(resource_ID);
            console.log("Resource: " + resource_ID + " Created:");
            console.log(res.body);
            done();
        });
    });
    before(function(done){
        generator.generator_resource.setPropertiesResource(resource_ID);
        resourceBody = generator.generator_resource.getResources();
        request.mroo.postRoomResource(room_ID, resourceBody, function(err, res){
            roomResourceId = res.body[0]._id;
            console.log("----------------------------------------------");
            console.log("Room: " + room_ID + " New Resource associated:");
            console.log(res.body);
            done();
        });
    });

    it('GET /room-resources returns status code 200', function(done){
        request.mroo.getRoomIDResources(room_ID, function(err, res){
            console.log("----------------------------------------------");
            console.log("Room: " + room_ID + " All Resources associated:");
            console.log(res.body);
            done();
        });
    });

    it('GET /room-resources returns status code 200', function(done){
        request.mroo.getRoomIDResources(room_ID, function(err, res){
            console.log("----------------------------------------------");
            console.log("Room: " + room_ID + " All Resources associated:");
            console.log(res.body);
            done();
        });
    });

    it('GET /Specific Room with Specific Resource returns status code 200', function(done){
        request.mroo.getRoomIDResourcesID(room_ID, roomResourceId, function(err, res){
            console.log("----------------------------------------------");
            console.log("Room: " + room_ID + " Specific Resource associated:" + roomResourceId);
            console.log(res.body);
            done();
        });
    });

   it('PUT /Updates a specific resource from a specific room, returns status code 200', function(done){
        var body = {"quantity": generator.generateCapacity()};
        request.mroo.putRoomResource(room_ID, roomResourceId, body, function(err, res){
            console.log("----------------------------------------------");
            console.log("Room: " + room_ID + " Resource associated updated:" + roomResourceId);
            console.log(res.body);
            done();
        });
    });

    /*it('DEL /Removes a specific resource from a specific room, returns status code 200', function(done){
        request.mroo.delRoomIDResourcesID(room_ID, roomResourceId, function(err, res){
            console.log("----------------------------------------------");
            console.log("Room: " + room_ID + " Specific Resource deleted:" + roomResourceId);
            console.log(res.body);
            done();
        });
    });*/

});
