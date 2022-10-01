// Create a function that squares every number in the array.  

const nums = [1,2,3,4,5];


const squares = (arr) => {
  arr.map((num, i) => {
    arr[i] = arr[i] * arr[i]
  })
  return arr
}

console.log(squares(nums))