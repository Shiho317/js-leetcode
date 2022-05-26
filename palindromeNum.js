//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

const isPalindrome = (num) => {
  let str = '' + num;
  let len = str.length - 1;
  let i = 0;
  while(i < len){
    if(str[i] !== str[len]) return false;
    i++;
    len--;
  }
  return true
}

console.log(isPalindrome(121))