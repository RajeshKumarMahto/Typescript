export{};

//Different array methods
//1. concat() method: USed to merge 2 or more arrays. The method does not changes the existing arrays but instead return new array.
const array1: string[]= ['a', 'b', 'c'];
const array2: string[]= ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(array3);

//2. at() method: it takes integer value and returns the item at that index. Accepts both positive and negative values.
console.log(array1.at(2));