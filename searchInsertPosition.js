//Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//You may assume no duplicates in the array.

const searchInsert = (nums, target) => {
  let len = nums.length;
  let left = 0;
  let right = len - 1;
  let mid = 0;

  if(!len) return 0;

  while(left <= right) {
    mid = Math.floor((left + right) / 2);
    if(nums[mid] > target){
      right = mid - 1;
    }else if(nums[mid] < target) {
      left = mid + 1;
    }else{
      return mid;
    }
  }

  return (nums[mid] > target) ? mid : (mid + 1);
}

console.log(searchInsert([1,3,5,6], 7));