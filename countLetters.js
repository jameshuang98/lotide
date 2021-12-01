const countLetters = function(sentence) {
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

module.exports = countLetters;
