'use strict'

// function isPalindrome(x) {
//   let reversed = x.split('').reverse().join('');
//   if (x === reversed) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// isPalindrome('madam');
// isPalindrome('hello');
// isPalindrome('racecar');




function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([]));