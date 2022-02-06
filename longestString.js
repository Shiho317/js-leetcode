//Given a string, find the length of the longest substring without repeating characters.

// const findChar = (str) => {
  
//   const newStr = [];

//   for(let i = 0; i < str.length; i ++){
//     if(newStr.indexOf(str[i]) === -1){
//       newStr.push(str[i])
//     }
//   }

//   return newStr.length
// }

// console.log(findChar("pwwkew"))

const lengthOfLongestSubstring = (s) => {
  let map = {};
  let length = s.length;
  let max = 0;
  let start = 0;

  for(let i = 0; i < length; i++){
    if(map[s[i]] !== undefined){
      start = Math.max(start, map[s[i]] + 1);
    }
    map[s[i]] = i;
    max = Math.max(max, i - start + 1);
  }

  return max;
}

console.log(lengthOfLongestSubstring("pwwkew"))