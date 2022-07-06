//Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const implementStr = (str, needle) => {
  // const splited = str.split('')
  // const need = needle.split('')

  for(let i = 0; i < str.length; i++){
    for(let x = 0; x < needle.length; x++) {
      if(i + x === str.length) return -1
        if(x === needle.length - 1) return i
        if(str[i + x] !== needle[x]) break;
      // if(splited[i] === need[x]){
        
      // }
    }
  }
  return -1
}

console.log(implementStr('hello', 'll'))
console.log(implementStr('aaaaa', 'bba'))