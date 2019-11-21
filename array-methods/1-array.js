// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
console.log(Math.max(...numbers))



// Find longest string in strings

var newStrings = strings.sort((a,b) => b.length -  a.length)
console.log(newStrings[0]);

// Find all the even numbers

var new1 = [];
numbers.forEach((n) => (n%2==0) ? new1.push(n) : '');
console.log(new1);

// Find all the odd numbers

var new2 = [];
numbers.forEach((n) => (n%2 !=0 ) ? new2.push(n) : '');
console.log(new2);



// Find all the words that contain 'is' use string method 'includes'

var inc;
inc = strings.filter((s) => s.includes('is'));


// Find all the words that contain 'is' use string method 'indexOf'

var incs=[] ;
strings.forEach((s) => s.indexOf('is') >=0? incs.push(s): '')

// Check if all the numbers in numbers array are divisible by three use array method (every)

numbers.every((n) => (n % 3 == 0)) ; 

//  Sort Array from smallest to largest
var ascend = []
ascend = numbers.sort((a,b) => a-b);
// Remove the last word in strings

strings.pop()

// Add a new word in the array
strings.push('new Word')
// Remove the first word in the array
strings.shift();
// Place a new word at the start of the array use (upshift)
strings.unshift("new")
// Make a subset of numbers array [18,9,7,11]
var sub = numbers.splice(3,4);
// Make a subset of strings array ['a','collection']
var strsub = strings.splice(2,2);
// Replace 12 & 18 with 1221 and 1881
var newSub = strings
// Replace words with string in strings array
strings.splice(-1,1,"nowords")
// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "DJave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
customers.filter((n) => n.firstname.indexOf('J') == 0? n.firstname: '')
// Create new array with firstname and lastname
var nc = customers.map((n) => n.firstname + " " + n.lastname);
// Sort the array created above alphabetically
nc.sort();
