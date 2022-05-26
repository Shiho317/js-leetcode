// Write a function to find the longest common prefix string amongst an array of strings.

//If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
  if(strs.length === 0) return '';
  let len1 = strs.length;
  let len2 = strs[0].length;

  let tmp = '';
  let res = '';

  outer: for(let i = 0; i < len2; i++) {
    tmp = strs[0][i];
    inner: for(let j = 1; j < len1; j++){
      if(strs[j][i] !== tmp) break outer;
    }
    res += tmp;
  }
  return res
}

console.log(longestCommonPrefix(["flower","flow","flight"]))