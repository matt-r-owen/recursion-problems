/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns an array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(array) {
  array.forEach((element) => {  // Iterate through each element of the array.
    if (Array.isArray(element)) {  // Check if the current element is a sub-array.
      element.forEach((subElement) => {  // Iterate through each sub-element in the sub-array.
        array.push(subElement);  // Add each sub-element to the end of the input array.
        element.shift();  // Now remove this first sub-element from this sub-array.  By the end of this forEach iteration we want this sub-array to be empty.
        if (element.length === 0) {  // Check if the sub-array is empty.
          array.splice(array.indexOf(element), 1);  // The sub-array is empty, therefore it is useless, so remove it from the input array.
        }
      });

      return flatten(array);  // Now that the input array has been mutated, recursively loop back through the function to check for anymore sub-arrays.
    }
  });

  return array;  // If none of the input array's elements are sub-arrays, then return the freshly flattened array.
}




flatten([]); // []
console.log(flatten([]));

flatten([1, 2]); // [1, 2]
console.log(flatten([1, 2]));

flatten([1, [2, [3]]]); // [1, 2, 3]
console.log(flatten([1, [2, [3]]]));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
