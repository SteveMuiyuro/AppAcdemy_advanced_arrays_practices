/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

*/

function snakeToCamel(str) {
  // Your code here
  let arr = str.split("_");
  let pascalCase = arr.map((word) => {
    let firstletter = word[0].toUpperCase();
    let letters = word.slice(word.indexOf(word[1]));
    return (firstletter += letters.toLowerCase());
  });

  return pascalCase.join("");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

/*try {
    module.exports = snakeToCamel;
} catch (e) {
    module.exports = null;
}*/
console.log(snakeToCamel("snakes_go_hiss")); // 'SnakesGoHiss'
console.log(snakeToCamel("say_hello_world")); // 'SayHelloWorld'
console.log(snakeToCamel("app_academy_is_cool")); // 'AppAcademyIsCool'
console.log(snakeToCamel("APp_ACADEMY_iS_cOol")); // 'AppAcademyIsCool'
