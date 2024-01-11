"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Different array methods
//1. concat() method: USed to merge 2 or more arrays. The method does not changes the existing arrays but instead return new array.
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(array3);
//2. at() method: it takes integer value and returns the item at that index. Accepts both positive and negative values.
console.log(array1.at(2));
