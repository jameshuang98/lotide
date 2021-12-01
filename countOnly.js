const assertEqual = require('./assertEqual')

const countOnly = function(allItems, itemsToCount) {
    output = {}
    for (const item of allItems) {
        if (itemsToCount[item]) {
            if (output[item]) {
                output[item] += 1; // increments the value of the key if the key already exists
            } else {
                output[item] = 1; // adds item as a key to our output object and keeps count of occurances starting at 1
            }
        }
    }
    console.log(output)
    return output;
}


module.exports = countOnly;

// const firstNames = [
//     "Karl",
//     "Salima",
//     "Agouhanna",
//     "Fang",
//     "Kavith",
//     "Jason",
//     "Salima",
//     "Fang",
//     "Joe"
//   ];
  
//   const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
//   assertEqual(result1["Jason"], 1);
//   assertEqual(result1["Karima"], undefined);
//   assertEqual(result1["Fang"], 2);
//   assertEqual(result1["Agouhanna"], undefined);