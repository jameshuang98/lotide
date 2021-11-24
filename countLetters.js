const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`)
    } else {
        console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`)  
    }

};

const countOnly = function(sentence) {
    output = {}
    for (const letter of sentence) {
        if (letter !== ' ') {
            if (output[letter]) {
                output[letter.toLowerCase()] += 1;
            } else {
                output[letter.toLowerCase()] = 1;
            }
        }
    }

    return output;
}

console.log(countOnly('Welcome to LHL'))