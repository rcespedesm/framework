var expect = require('chai');
var request = require('../../lib/RequestManager/manager.js');
var generator = require('../../utils/generator.js');



describe("suit", function(){

    this.slow(10000);
    this.timeout(10000);

    beforeEach(function(done){
        request.maut.postLogin(function(err, res){
            done();
        });
    });


    it('GET /resources returns status code 200',function(done){
        request.mres.getResource(function(err, res){
            console.log(res.body);
            console.log("test");
            done();
        });

    });

    it('POST /resources returns status code 200', function(done){
        var body = generator.generator_resource.generateResource();
        request.mres.postResource(body, function(err, res){
            console.log(res.body);
            done();
        });
    });
});