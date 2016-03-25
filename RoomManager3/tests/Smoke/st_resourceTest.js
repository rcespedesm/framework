var expect = require('chai');
var request = require('../../lib/RequestManager/manager.js');
var generator = require('../../utils/generator.js');



describe("suit", function(){

    this.slow(10000);
    this.timeout(10000);

    var ID;

    before(function(done){
        request.maut.postLogin(function(err, res){
            done();
        });
    });

    beforeEach(function(done){
        var body = generator.generator_resource.generateResource();
        request.mres.postResource(body, function(err, res){
           ID = res.body._id;
            done();
        });
    });

    it('DEL /resources returns status code 200', function(done){
        request.mres.delResource(ID, function(err, res){
            done();
        });

    });

});