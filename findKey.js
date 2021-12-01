const assertEqual = require('./assertEqual')


const findKey = function(obj, callback) {
    for (const item in obj) {
        if (callback(obj[item])) {
            return item;
        }
    }
}

module.exports = findKey;

// assertEqual(findKey({hello: 123, hi: 11, sup: 321}, x => x === 123), 'hello')
// assertEqual(findKey({'1st':'14123', '2nd':'100', '3rd':'123', '4th':'43'}, x => x === '123'), '3rd')
// assertEqual(findKey({1:'strslj', 2:'dsafss', 3:'adsf'}, x => x.length < 5), '3')
// assertEqual(findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), 'noma')