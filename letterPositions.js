const letterPositions = function(sentence) {
    const output = {};
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i];
        if (letter !== ' ') {
            if (output[letter.toLowerCase()]) {
                output[letter.toLowerCase()].push(i);
            } else {
                output[letter.toLowerCase()] = [i];
            }
        }
    }

    return output;
    
  };


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


assertArraysEqual(letterPositions('hello').h,[0]);
assertArraysEqual(letterPositions('hello').e,[1]);
assertArraysEqual(letterPositions('Coding is so fun').s,[8, 10]);