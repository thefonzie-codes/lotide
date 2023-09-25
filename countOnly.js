const countOnly = function(allItems, itemsToCount) {

  const counts = {};

  for (let key in itemsToCount) {
    
    allItems.forEach(each => {
      if (key === each) {
        
        if (!counts[key]) {
          counts[key] = 1;
        } else {
          counts[key]++;
        }
      }
    });
  }
  
  return counts;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1["Jason"], 1);

/*

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

*/

module.exports = countOnly;