// INSTRUCTIONS:
// Create a function that takes in a number and reverses it.
// The output should be a number.

const reverseNumber = (num) => {
  let numString = num.toString()

  let arr = []
    for(let i = 0; i < numString.length; i++) {
        arr.unshift(numString[i])
    }

    return arr.join('')
}

console.log(reverseNumber(345))