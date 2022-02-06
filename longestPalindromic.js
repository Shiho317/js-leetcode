//Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

const str = "babad";

const longestPalindrome = (s) => {
  const len = s.length;
  let num = 0;
  let end = 0;
  let start = 0;

  for (let i = 0; i < len; i++){
    num = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));
    if(num > end - start){
      start = i - Math.floor((num - 1) / 2);
      end = i + Math.floor(num / 2);
    }
  }
  return s.slice(start, end + 1);
};

const expandAroundCenter = (s, left, right) => {
  let l = left;
  let r = right;
  const len = s.length;
  while(l >= 0 && r < len && s[l] === s[r]){
    l--;
    r++;
  }
  return r - l - 1;
}

console.log(longestPalindrome(str))