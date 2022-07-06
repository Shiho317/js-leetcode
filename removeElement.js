//Given an array nums and a value val, remove all instances of that value in-place and return the new length.

//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

//The order of elements can be changed. It doesn't matter what you leave beyond the new length.

const removeEle = (array, val) => {
  let newArr = [];

  for(let i = 0; i < array.length; i++){
    if(array[i] !== val){
      newArr.push(array[i])
    }
  }
  console.log(newArr.length)
}

removeEle([3, 2, 2, 3], 3)
removeEle([0,1,2,2,3,0,4,2], 2)
