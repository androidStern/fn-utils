var chai, expect, fn_utils, should, sinon, sinonChai;

chai = require('chai');

expect = chai.expect;

should = chai.should();

sinon = require('sinon');

sinonChai = require('sinon-chai');

chai.use(sinonChai);

fn_utils = require('../lib/fn-utils.coffee');

describe("test", function() {
  beforeEach(function(done) {
    this.foo = "bar";
    this.beverages = {
      tea: ["chai", "matcha", "oolong"]
    };
    return done();
  });
  return it("should be done successfull", function() {
    expect(this.foo).to.be.a("string");
    expect(this.foo).to.equal("bar");
    expect(this.foo).to.have.length(3);
    return expect(this.beverages).to.have.property("tea")["with"].length(3);
  });
});
