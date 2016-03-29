var expect = require('chai').expect;
var request = require('../../lib/RequestManager/manager.js');
var generator = require('../../utils/generator.js');
var precondition = require('../../lib/Conditions/precondition.js');
var assertions = require('../../lib/Conditions/assertion.js');

describe("Suit: Room Resources Service", function(){

    this.slow(10000);
    this.timeout(10000);
    var room_ID = "56f8034fe7a7f714063029d3";
    var resource_ID;
    var roomResourceId;
    var resourceBody;

    before(function(done){
        request.maut.postLogin(function(err, res){
            done();
        });
    });
    //Create resource by DB
    before(function(done){
        var resourceBody = generator.generator_resource.generateResource();
        precondition.insertResource(resourceBody,function(err,res){
           // generator.generator_resource.setPropertiesResource(resource_ID);
            done();
        });


    });
    //add resource into a  room --generate
    before(function(done){
        assertions.findAllRooms(function(res){
            room_ID = res[0]._id;
            generator.generator_resource.setPropertiesResource(resource_ID);
            resourceBody = generator.generator_resource.getResources();
            precondition.addResourceToRoom(room_ID,resourceBody,
                function(err, res){
                    done();
                });
        });
    });
//post create association
    it.only('GET /room-resources returns status code 200', function(done){
        request.mroo.getRoomIDResources(room_ID, function(err, res){
            console.log(res.status);
            done();
        });
        //findresourcebyroom
    });

    it('GET /Specific Room with Specific Resource returns status code 200', function(done){
        request.mroo.getRoomIDResourcesID(room_ID, roomResourceId, function(err, res){
            console.log(res.status);
            done();
        });
    });

   it('PUT /Updates a specific resource from a specific room, returns status code 200', function(done){
        var body = {"quantity": generator.generateCapacity()};
        request.mroo.putRoomResource(room_ID, roomResourceId, body, function(err, res){
            console.log(res.status);
            done();
        });
    });

    it('DEL /Removes a specific resource from a specific room, returns status code 200', function(done){
        request.mroo.delRoomIDResourcesID(room_ID, roomResourceId, function(err, res){
            console.log(res.status);
            done();
        });
    });

});
