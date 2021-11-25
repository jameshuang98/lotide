const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`)
    } else {
        console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`)  
    }

};


const findKeyByValue = function(obj, value) {

    let output = '';
    for (const key in obj) {
        if (obj[key] === value) {
            return key
        }
    }

}


const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


  const testCases = { 
    sci_fi: "Interstellar",
    sci_fi2: "Gravity",
    comedy: "Brooklyn Nine-Nine",
    drama:  "123"
  };
  
  assertEqual(findKeyByValue(testCases, "Gravity"), "sci_fi2");
  assertEqual(findKeyByValue(testCases, "123"), 'drama');