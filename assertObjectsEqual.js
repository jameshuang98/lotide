const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
    }
    return true;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise return false false!
const eqObjects = function(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }
    for (const key in object1) {
        if (Array.isArray(object1[key])) {
            if ((eqArrays(object1[key], object2[key])) === false) {
                return false;
            } 
        } else if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
};


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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); 

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); 

const obj1 = {}
const obj2 = {}
assertObjectsEqual(eqObjects(obj1, obj2), true); 
assertObjectsEqual(eqObjects(obj1, abc), false); 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false);
