var assert = require('assert');
var supertest = require("supertest");
var should = require("should");
var app = require('.././server.js');
var request = require('supertest')(app);

// UNIT test begin

describe("Home page test",function(){

  // should return 200 for homepage

  it("should return home page",function(done){

    request
    .get("/")
    .expect(200)
    .end(function (err, res) {
      res.status.should.equal(200);
      done();
    }) 
  });
});

describe("Math page test",function(){

  // should return 200 for Mathpage

  it("should return math page",function(done){

    request
    .get("/math")
    .expect(200)
    .end(function (err, res) {
      res.status.should.equal(200);
      done();
    }) 
  });
});

describe("Game page test",function(){

  // should return 200 for Gamepage

  it("should return game page",function(done){

    request
    .get("/")
    .expect(200)
    .end(function (err, res) {
      res.status.should.equal(200);
      done();
    }) 
  });
});

describe("Default User page test",function(){

  // should return 200 for Default User page

  it("should return default user page",function(done){

    request
    .get("/")
    .expect(200)
    .end(function (err, res) {
      res.status.should.equal(200);
      done();
    }) 
  });
});

describe("Specific User Page test",function(){


  it("should return json Object of User Info",function(done){

    request
    .get("/user/1")
    .type('json')
    .set('Accept', 'application/json')
    .set('Connection', 'keep-alive')
    .expect(200)
    .expect("Content-Type",/json/)
    .end(function(err, res){
      res.status.should.equal(200);
        assert.deepEqual(res.body, {"No. of Requests": "Hello User-1, You have made "+11+" requests"})
      done();
    });
  });
});

describe("Page Not Found test",function(){


  it("should return Page Not Found!",function(done){

    request
    .get("/*")
    .expect(200)
    .end(function(err, res){
      res.status.should.equal(200);
      done();
    });
  });
});

