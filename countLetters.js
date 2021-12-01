const countLetters = function(sentence) {
    output = {}
    for (const letter of sentence) {
        if (letter !== ' ') {
            if (output[letter]) {
                output[letter.toLowerCase()] += 1; // if the key already exists, increment the value
            } else {
                output[letter.toLowerCase()] = 1; // adding the letter key into the array
            }
        }
    }

    return output;
}

module.exports = countLetters;
