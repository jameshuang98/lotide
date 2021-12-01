const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; // <= add this line
    // console.log(`Example label: ${inspect(actual)}`);
    if (eqObjects(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`)
    } else {
        console.log(`❌❌❌ Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`)  
    }  
  };

module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba); 

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(eqObjects(ab, abc), false); 

// const obj1 = {}
// const obj2 = {}
// assertObjectsEqual(eqObjects(obj1, obj2), true); 
// assertObjectsEqual(eqObjects(obj1, abc), false); 

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(eqObjects(cd, cd2), false);
