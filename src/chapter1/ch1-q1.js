'use strict';



/**
* Is Unique: Implement an algorithm to determine if a string has all
* unique characters. What if you cannot use additional data structures?
*/




export function hasUniqueCharactersSet(str) {
  console.log('typeof str:', typeof str)
  console.log('Array.isArray(str):',Array.isArray(str))
  let strList = str.split('');
  return strList.reduce((prev, next, i) => {
    if (!prev) {
      return false;
    }
    return strList.indexOf(next, i + 1) === - 1;
  }, true);
}

console.log('hasUniqueCharactersSet(\'hello\')', hasUniqueCharactersSet('hello'));
console.log('hasUniqueCharactersSet(\'hi\')', hasUniqueCharactersSet('hi'));





// export function hasUniqueCharactersSort(str) {
//
// }




/**
* What is the Time Complexity?
*
* What is the Space Complexity?
*/
