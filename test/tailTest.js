const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// Test code

describe("#tail", () => {
    it("returns [2, 3] for [1, 2, 3]", () => {
      assert.strictEqual(assertArraysEqual(tail([1, 2, 3]), [2, 3]));
    });

    it("returns [] for ['5']", () => {
        assert.strictEqual(assertArraysEqual(tail(['5']), [])); 
    });

    it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse' 'Labs']", () => {
        assert.strictEqual(assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])); 
    });

    it("returns undefined for []", () => {
        assert.strictEqual(assertArraysEqual(tail([]), [])); 
    });

});



