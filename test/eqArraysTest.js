// Importing functions
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
    it("returns true if arrays are equal", () => {
        assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
    });

    it("returns false if arrays are not equal", () => {
        assert.isFalse(eqArrays([1, 2, 3], [1, 2, '3'])); 
    });

    it("returns true if arrays are equal", () => {
        assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
    });
});

