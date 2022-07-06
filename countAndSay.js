//The count-and-say sequence is the sequence of integers with the first five terms as following:

const countAndSay = (n) => {
  let str = '1';
  let tmp = '';
  let last = '';
  let count = 0;
  let len = 0;

  for(let i = 1; i < n; i++){
    tmp = '';
    last = '';
    count = 0;
    len = str.length;

    for(let j = 0; j < len; j++){
      if(last === ''){
        last = str[j];
        count = 1;
        continue;
      }
      if(str[j] === last) {
        count += 1;
      }else{
        tmp += '' + count + last;
        last = str[j];
        count = 1;
      }
    }

    if(last) {
        tmp += '' + count + last;
      }

      str = tmp;
  }
  return str;
}

console.log(countAndSay(4))