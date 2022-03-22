//The code should take the value of 2 integers as a value of 1 target integers 

function hasTargetSum(array, target) {
    for(let i = o; i < array.length; i++){
      array[i + i] = target
    }
}

/* 
  Write the Big O time complexity of your function here
*/

/* write a code that grabs an array
once we have the array, the code should iterate through the array
as it iterates through the array it should add two numbers together to total 1 target integer value.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
