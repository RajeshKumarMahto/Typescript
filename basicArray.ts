export {};

//Array declarations

//1. Number array
let ids: number[]= [0.1, 12, 12, 12];
// console.log(ids);
//2. string array
let names: string[] = ["Raj", "Ram", "Sam", "Atharv"];
console.log(names);
//3. Boolean array
let isOlder: boolean[] = [true, false, true];
// console.log(isOlder);
//4. Union Type array
let mixedArray: (number|string|boolean)[] = [1, 'Raj', 2, 'Ramesh', false];
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
names.unshift("Ken");//single element
console.log(names);
names.unshift("Sonu", "Titu", "Kittu");//multiple element
console.log(names);

//3. at any specific index
const colours: string[] = ['Blue', 'Orange', 'Red'];
const deletedColours: string[] = colours.splice(1, 1, 'Green', 'Yellow');
console.log(colours)
console.log(deletedColours);

//4. Usong concat method
let  realHeros: string[] = ['Bhagat', 'Rajguru', 'Sukhdev'];
let personalities: string[] = realHeros.concat('Salman', 'Ajay');
console.log(realHeros);
console.log(personalities);
// Deletion from array
console.log(realHeros.pop(), realHeros);
console.log(personalities);

