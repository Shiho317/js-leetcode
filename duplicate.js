// rid of duplicate number in array

// const arr = [1,5,6,1,0,1];

// const newArr = (arr) => {

//   let result = [];

//   arr.filter((ele, index, array) => {
//     if(array.indexOf(ele) === index){
//       result.push(arr[index])
//     }
//   })

//   return result
// }

// console.log(newArr(arr))

const arr = [1,5,6,1,0,1];

console.log([...new Set(arr)]);

console.log(arr.filter((item, index) => arr.indexOf(item) === index));

console.log(arr.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]), [],
));