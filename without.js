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

const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`)
    } else {
        console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`)  
    }        
}

const without = function(original, unwanted) {
    let output = original;
    for (let i = 0; i < unwanted.length; i++) {
        for (let j = 0; j < original.length; j++) {
            if (unwanted[i] === original[j]) {
                output.splice(j, 1);
            }
        }
    }
    return output;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]))// => ["1", "2"])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);