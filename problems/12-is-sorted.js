/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

function isSorted(array) {
 if (array[0] >= array[1]) {
  return false;
 }

 if (array.length <= 2) {
  return true;
 }

 return isSorted(smallerArray = array.slice(2));
}




isSorted([1, 2, 3, 4, 5]); // true
console.log(isSorted([1, 2, 3, 4, 5]));

isSorted([1, 2, 4, 3, 5]); // false
console.log(isSorted([1, 2, 4, 3, 5]));

isSorted([2, 4, 6, 7, 8]); // true
console.log(isSorted([2, 4, 6, 7, 8]));

isSorted([5, 4, 3, 2, 1]); // false
console.log(isSorted([5, 4, 3, 2, 1]));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
