//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//example: Given nums = [2, 7, 11, 15], target = 9,
//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

const findNums = (arr, total) => {

  let resultArr;

  for(let i = 0; i < arr.length; i++){
    const targetNum = total - arr[i];
    const numIndex = arr.indexOf(targetNum);

    if(numIndex >= 0){
      resultArr = [arr[i], arr[numIndex]]
    }
  }

  return resultArr
}

const givenNums = [2, 7, 11, 15];

console.log(findNums(givenNums, 9))


// const findNums = (nums, target) => {
//   for(let i = 0; i < nums.length; i++){
//     const total = nums[i] + nums[i+1];
//     if(total === target){
//       console.log(i, i+1)
//     }
//   }
// }
// findNums([2, 7, 11, 15], 9);



