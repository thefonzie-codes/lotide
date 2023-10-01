const flatten = (array) => {
  const flattenedArr = [];

  array.forEach((each) => {

    if (Array.isArray(each)) {
      flattenedArr.push(...flatten(each));
    } else {    
      flattenedArr.push(each);
    }
  });

  return flattenedArr;
}
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]