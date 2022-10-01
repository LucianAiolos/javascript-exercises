// INSTRUCTIONS:
// Create a function that takes in a string and puts all of its letters in alphabetical order
// Output should be a string

let string = 'Hello World'

const sortAlphabetically = (str) => {
  return str.toLowerCase().split('').sort().join('')
}


console.log(sortAlphabetically(string))


let numArr = [1, 5, 7, 34, 6]

const sortNums = (arr) => {
  let resArr = []
  for(let i = 0; i < arr.length; i++){
    
  }
}


console.log(sortNums(numArr))
// *** Bonus
// 1. Create a function that takes in array of numbers and puts them in numerical order.