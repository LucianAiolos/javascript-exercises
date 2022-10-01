// INSTRUCTIONS:
// Create a function that takes in a string and reverses it. 
// The output should be a string

// ***Bonus*** 
// If you finish early:
// reverse a three digit number, making sure that the output is still a number. (You can use typeOf to check your work)

//If you still have time reverse an array. (The last value in the array should become the first value and vise versa)

let string = "Hello"

const reverseString = (str) => {
    let arr = []
    for(let i = 0; i < str.length; i++) {
        arr.unshift(str[i])
    }

    return arr.join('')
}


console.log(reverseString(string))


let number = 123

const reverseNum = (num) => {
    let numStr = num.toString()
    let arr = []
    for(let i = 0; i < numStr.length; i++) {
        arr.unshift(numStr[i])
    }

    let reverseNum = arr.join('')
    return parseInt(reverseNum)
}

console.log(reverseNum(number))
