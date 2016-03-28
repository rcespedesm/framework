var expect = require('chai');
var request = require('../../lib/RequestManager/manager.js');
var generator = require('../../utils/generator.js');

var preConditions = require("../../lib/Conditions/precondition.js");

describe("CRUD ROOMS", function(){

    this.slow(10000);
    this.timeout(10000);

   beforeEach(function(done){
    /* I need ensure that there is rooms
   If there is? OK take one room
   */
      serviceId ="56ec215705a9841c06292f4c";
    /*
   No --> Create a new Service BY DataBase??? ummm too complicated
        request.maut.postLogin(function(err, res){
            done();
        });
     */});


    it('CRUD - GET /room returns all rooms',function(done){
        request.mres.getResource(function(err, res){
            console.log(res.body);
            console.log("test");
            done();
        });

    });

    it('CRUD - GET /rooms/{:roomId} returns a room',function(done){
        request.mres.getResource(function(err, res){
            console.log(res.body);
            console.log("test");
            done();
        });

    });

    it.skip('CRUD - PUT /rooms api modify a specific room', function(done){
        var body = generator.generator_resource.generateResource();
        request.mres.postResource(body, function(err, res){
            console.log(res.body);
            done();
        });
    });
});