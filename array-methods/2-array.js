var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
var longest = ''
function findLongestWord(arr){
  for(let i=0; i< arr.length ; i++){
    if(arr[i].length > longest.length){
      longest = arr[i]
    }
  } 
}
findLongestWord(words);

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
 var sumn = 0;
function sumArray(arr){
  for (let i=0 ; i < arr.length ; i++){
    sumn += arr[i]
  }
}
sumArray(numbers1);
sumn;

var newSum = numbers1.reduce((a,b) => (a + b));

function average(sumn){ 
  console.log (sumn/numbers1.length) 
 }
average(sumn)

var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers

function averageNumbers(arr){
 console.log (arr.reduce((a,b) => a+b) / arr.length)
}

averageNumbers(numbers2);


var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(arr){
  return (arr.reduce((a,b) => a + b.length,0)/arr.length)
}


