//The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

const convert = (s, numRows) => {
  if(s.length <= numRows || numRows < 2) return s;
  let len = s.length;
  let num = 2 * (numRows - 1);
  let res = Array(numRows).fill('');
  let tmp = 0;
  for (let i = 0; i < len; i++){
    tmp = i % num;
    if(tmp < numRows){
      res[tmp] += s[i];
    }else{
      res[num - tmp] += s[i];
    }
  }
  return res.join('')
};

console.log(convert("PAYPALISHIRING", 4))
