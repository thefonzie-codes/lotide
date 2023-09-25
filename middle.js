const middle = function(array) {
  
  let mid = [];
  let length = array.length;
  let half = Math.floor(array.length / 2);

  if (length % 2 !== 0) {
    mid.push(array[half]);
    return mid;
  }
  mid.push(array[half - 1], array[half]);
  return mid;
}

module.exports = middle;