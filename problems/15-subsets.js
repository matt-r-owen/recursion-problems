/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

function subsets(array) {
  if (array.length === 0) {
    return [[]];
  }

  const subArray = [];  // Initialize an empty array to store the subsets.
  const firstElement = array[0];  // Take the first element from the input set.
  const remainingArray = array.slice(1);  // (This is the Recursive Step!) Get the remaining set after removing the first element.

  subsets(remainingArray).forEach((element) => {  // Recursively find the power set for the remaining set.
    subArray.push(element);  // Add the current subset from the recursive call to the results.
    subArray.push([firstElement, ...element]);  // Add another subset that includes the first element combined with the current subset.
  });

  return subArray;  // Return the aggregated subsets.
}




subsets([]) // [[]]
console.log(subsets([]));

subsets([1]) // [[], [1]]
console.log(subsets([1]));

subsets([1, 2]) // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2]));

subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
console.log(subsets([1, 2, 3]));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
