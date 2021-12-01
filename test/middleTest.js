const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

// Test Code
describe("#middle", () => {
    it("returns 2 for [1, 2, 3]", () => {
      assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2]));
    });

    it("returns [] for [5]", () => {
        assert.strictEqual(assertArraysEqual(middle([5]), [])); 
    });

    it("returns [2, 3] for [1, 2, 3, 4]", () => {
        assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); 
    });

    it("returns [3] for [1, 2, 3, 4, 5]", () => {
        assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); 
    });
    it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
        assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); 
    });

});
