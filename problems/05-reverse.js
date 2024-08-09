/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

function reverse(string) {
  if (string.length <= 0) {
    return '';
  }

  return string.slice(-1) + reverse(string.slice(0, string.length - 1));
}




reverse("house"); // "esuoh"
console.log(reverse("house"));

reverse("dog"); // "god"
console.log(reverse("dog"));

reverse("atom"); // "mota"
console.log(reverse("atom"));

reverse("q"); // "q"
console.log(reverse("q"));

reverse("id"); // "di"
console.log(reverse("id"));

reverse(""); // ""
console.log(reverse(""));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
