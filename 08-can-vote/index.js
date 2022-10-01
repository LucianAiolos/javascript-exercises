// Write a function that takes in a person's age and determines if they are old enough to vote.
// The function should return a boolean value.
const canVote = (a) => {
  if(a < 18){
    return false
  } else {
    return true
  }

}


console.log(canVote(17))
console.log(canVote(19))
