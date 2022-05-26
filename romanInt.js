//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

const romamnToInt = (str) => {
  const romans = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }

  const len = str.length;
  let res = 0;
  let i = 0;

  while(i < len){
    if(romans[str.substr(i, 2)]) {
      res += romans[str.substr(i, 2)];
      i += 2;
    }else{
      res += romans[str[i]]
      i += 1;
    }
  }
  return res
}

console.log(romamnToInt('LVIII'))