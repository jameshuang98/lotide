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

const takeUntil = function(array, callback) {
    output = [];
    for (const item of array) {
        if (!(callback(item))) {
            output.push(item)
        } else {
            return output;
        }
    }
    return output;
  }


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

assertArraysEqual(takeUntil(['14123', '100', '123', '43'], x => x === '123'), ['14123', '100'])
assertArraysEqual(takeUntil(['strslj', 'dsafss', 'adsf'], x => x.length < 5), ['strslj', 'dsafss'])
assertArraysEqual(takeUntil([123, 11, 321], x => x > 200), [123, 11])