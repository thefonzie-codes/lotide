const countLetters = function(string) {
  
  const count = {};
  let lowerCaseString = string.toLowerCase();

  for (let letter of lowerCaseString) {
    
    if (!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter] ++;
    } 
  }
  return count;
}

let string = "What's up"
console.log(countLetters(string));

module.exports = countLetters;
