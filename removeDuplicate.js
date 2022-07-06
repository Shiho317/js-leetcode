//Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


const sortArr = (array) => {
  let arr = []

  for(let i = 0; i < array.length; i++){
    if(arr.indexOf(array[i]) === -1){
      arr.push(array[i])
    }
  }
  console.log(arr.length)
}

sortArr([1,1,2])