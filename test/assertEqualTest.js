// Adding the require logic to this test file
const assert = require('chai').assert;


// TEST CODE

describe("#assertEqual", () => {
    it("returns true if the two values are equal", () => {
        assert.strictEqual(1, 1);
    });

    it("returns false if the two values are not equal", () => {
        assert.notStrictEqual("Lighthouse Labs", "Bootcamp"); 
    });
});

