//Given a 32-bit signed integer, reverse digits of an integer.

const reverse = (x) => {
  const max = 2147483647;
  let min = - max - 1;
  let res = 0;
  let num = x;
  while(num !== 0){
    res = (res * 10) + (num % 10);
    num = num > 0 ? Math.floor(num / 10) : Math.ceil(num / 10);
    if(res > max || res < min) return 0;
  }
  return res;
};

console.log(reverse(123))