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

// String to integer (atoi)

const myAtoi = (str) => {
  let i = 0;
  let sign = 1;
  let res = 0;
  const INT_MAX = 2147483647;
  const INT_MIN = - INT_MAX - 1;

  while(str[i] === ' ') i++;
  if (str[i] === '+' || str[i] === '-'){
    sign = str[i] === '+' ? 1 : -1;
    i++;
  }

  while (str[i] >= '0' && str[i] <= '9') {
    res = (res * 10) + (str[i] - 0);
    if(sign === 1 && res > INT_MAX) return INT_MAX;
    if(sign === -1 && res > INT_MAX + 1) return INT_MIN;
    i++;
  }

  return res * sign
}

console.log(myAtoi("4193 with words"))