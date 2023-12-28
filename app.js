"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Array declarations
//1. Number array
var ids = [0.1, 12, 12, 12];
// console.log(ids);
//2. string array
var names = ["Raj", "Ram", "Sam", "Atharv"];
console.log(names);
//3. Boolean array
var isOlder = [true, false, true];
// console.log(isOlder);
//4. Union Type array
var mixedArray = [1, 'Raj', 2, 'Ramesh', false];
// console.log(mixedArray);
//Access elements from an array
//1. Using index
// console.log(ids[0]);
// console.log(ids[2]);
// //2. Using forof loop
// for (const el of ids) {
//     console.log(el);
// }
//3. foreach loop
// mixedArray.forEach(element => {
//     console.log(element);
// });
//4. using for in loop
// for (const key in mixedArray) {
//     console.log(mixedArray[key]);
// }
//Insertion in array
//1. at the last
// names.push("Ramesh");
// names.push("Vishal");
// names.push("Jogindar", "Kalwa");
// console.log(names);
//2. At the beginning of the array
names.unshift("Ken"); //single element
console.log(names);
names.unshift("Sonu", "Titu", "Kittu"); //multiple element
console.log(names);
//3. at any specific index
var colours = ['Blue', 'Orange', 'Red'];
var deletedColours = colours.splice(1, 1, 'Green', 'Yellow');
console.log(colours);
console.log(deletedColours);
//4. Usong concat method
var realHeros = ['Bhagat', 'Rajguru', 'Sukhdev'];
var Personalities = [].concat('Salman', realHeros, 'Ajay');
console.log(Personalities);
//Deletion from array
// console.log(names.pop());
// console.log(names)
