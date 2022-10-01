// INSTRUCTIONS:
// Create a function that checks if an input is a string or not.
// Return true if it is a string and false if not
let string = "I'm a string"
let number = 234

const isString = (input) => {
  if(typeof input === "string") {
    return true + " is string"
  } else if (typeof input === "number"){
    return false + " is number"
  } 
  

}


console.log(isString(string))
console.log(isString(number))

const findType = (input) => {
  return typeof input
}

console.log(findType(string))


// ***Bonus***
// 1. check if a value is a number or not.
// Return true if it is a string and false if not

// If you still have time, create a function that takes in any value.
// Check it's data type and return the data type.
