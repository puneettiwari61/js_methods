// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)

function prnt(obj){
  for(x in obj){
    console.log (x, obj[x])
  }
}

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};

function del(obj){
  for(x in obj){
    if(x == 'rollno'){
      delete obj[x]
    }
  }
  return obj
}




// 3. Write a function to get the length of an object.

var q = 0;
function findLength(obj){ 
  for (keys in obj){
   ++q
  }  
	console.log(q)
	q = 0
}