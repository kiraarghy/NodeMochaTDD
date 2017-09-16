var assert = require("assert");

var addAllTheThings = require("../src/addAllTheThings.js");
describe("addAllTheThings", () => {
  it("should return a single number when passed a single number in the array", () => {
    assert.equal(3, addAllTheThings([3]));
    assert.equal(4, addAllTheThings([4]));
  });
  it("should return 0 when no value is passed in", () => {
    assert.equal(0, addAllTheThings());
    assert.equal(0, addAllTheThings([]));
  });
  it("should add two numbers passed into the array together", () => {
    assert.equal(7, addAllTheThings([3, 4]));
    assert.equal(-1, addAllTheThings([3, -4]));
    assert.equal(3, addAllTheThings([3, 0]));
  });
  it("should add more than two numbers passed into the array together", () => {
    assert.equal(8, addAllTheThings([2, 2, 4]));
    assert.equal(24, addAllTheThings([6, 6, 6, 6]));
    assert.equal(100, addAllTheThings([30, 55, 5, 5, 5]));
    assert.equal(21, addAllTheThings([1, 2, 3, 4, 5, 6]));
    assert.equal(28, addAllTheThings([1, 2, 3, 4, 5, 6, 7]));
    assert.equal(36, addAllTheThings([1, 2, 3, 4, 5, 6, 7, 8]));
    assert.equal(45, addAllTheThings([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  });
  it("should ignore null values in the array", () => {
    assert.equal(7, addAllTheThings([1, 2, null, 4]));
  });
  it("should ignore infinity", () => {
    assert.equal(7, addAllTheThings([1, 2, Infinity, 4]));
    assert.equal(7, addAllTheThings([1, 2, -Infinity, 4]));
    assert.equal(0, addAllTheThings([Infinity, -Infinity]));
  });
  it("should throw error if there is a string in the array", () => {
    assert.throws(
      () => {
        addAllTheThings(["Orange"])
      },
      Error
    );
  });
});
