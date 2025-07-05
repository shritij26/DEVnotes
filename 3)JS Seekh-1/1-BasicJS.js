console.log("Hello World")
console.log("First JS code")

// https://www.codewithharry.com/notes NOTES


/*    - var a = 5 -> globally declared
        let a = 6 -> locally declared    

      - function <name>(<params>) {    
              <this is how we create fnc>
        } 

      - input k liye: let a = prompt("enter");
        (Works only in browser environments, not in Node.js.)    */

/* ARRAYS */

let arr = [1,5,7,3] // here we can have array of diff data types
console.log(arr)
// Array functions in JS:

// push(): Adds one or more elements to the end of an array.
arr.push(10); // [1,5,7,3,10]

// pop(): Removes the last element from an array.
arr.pop(); // [1,5,7,3]

// shift(): Removes the first element from an array.
arr.shift(); // [5,7,3]

// unshift(): Adds one or more elements to the beginning of an array.
arr.unshift(0); // [0,5,7,3]

// concat(): Merges two or more arrays.
let arr2 = [8,9];
let merged = arr.concat(arr2); // [0,5,7,3,8,9]

// join(): Joins all elements into a string.
let str = arr.join('-'); // "0-5-7-3"

// slice(): Returns a shallow copy of a portion of an array.
let sliced = arr.slice(1,3); // [5,7]

// splice(): Adds/removes elements at a specific index.
arr.splice(2, 1, 99); // [0,5,99,3]

// forEach(): Executes a function for each array element.
arr.forEach(x => console.log(x)); // logs each element

// map(): Creates a new array with the results of calling a function on every element.
let doubled = arr.map(x => x*2); // [0,10,198,6]

// filter(): Creates a new array with elements that pass a test.
let filtered = arr.filter(x => x > 5); // [99]

// reduce(): Reduces array to a single value.
let sum = arr.reduce((acc, val) => acc + val, 0); // 107

// find(): Returns the first element that satisfies a condition.
let found = arr.find(x => x > 5); // 99

// findIndex(): Returns the index of the first element that satisfies a condition.
let idx = arr.findIndex(x => x > 5); // 2

// includes(): Checks if array contains a value.
let hasFive = arr.includes(5); // true

// indexOf(): Returns the first index of a value.
let pos = arr.indexOf(99); // 2

// reverse(): Reverses the array in place.
arr.reverse(); // [3,99,5,0]

// sort(): Sorts the array.
arr.sort((a,b) => a-b); // [0,3,5,99]

