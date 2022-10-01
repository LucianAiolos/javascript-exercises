// Create a function that takes in the array located below.
// Loop through the array and add the word 'California' to each string in the array.
// The output should be 'cityName, California'


let caliCities = ['Los Angeles', 'Burbank', 'Ontario', 'Compton', 'Anaheim']


const fixStrings = (arr) => {
  arr.map((city, i)=> {
    arr[i] += ', California'
  })
  return arr
}

console.log(fixStrings(caliCities))






// const reverseNumber = (num) => {
//    return num.toString().split('').reverse().join('')
// }

// console.log(reverseNumber(5678))