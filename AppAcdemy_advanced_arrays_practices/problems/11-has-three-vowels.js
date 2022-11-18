/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function (string) {
  // Your code here
  let vowels = "aeiou";
  let arr = string.split("");
  let count = 0;

  arr.forEach((char) => {
    if (vowels.includes(char)) {
      count++;
    }
  });

  return count > 3;
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

/*try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}*/
console.log(hasThreeVowels("delicious")); //  true
console.log(hasThreeVowels("bootcamp prep")); //  true
console.log(hasThreeVowels("bootcamp")); //  false
console.log(hasThreeVowels("dog")); //  false
console.log(hasThreeVowels("go home")); //  false
console.log(hasThreeVowels("gjjlaj")); //  false
