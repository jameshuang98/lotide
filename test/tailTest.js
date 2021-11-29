const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test code
// const result1 = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result1, ["Lighthouse", "Labs"]); // => cannot compare arrays in Javascript!

const result2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result2.length, 2); // ensure we get back two elements
assertEqual(result2[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result2[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail([1]), 1)
assertEqual(tail([]), undefined)