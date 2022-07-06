//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:

//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Note that an empty string is also considered valid.

const isValid = (string) => {
  const stack = [];
  const length = string.length;
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for(let i = 0; i < length; i++){
    if(stack.length > 0 && map[stack[stack.length - 1]] === string[i]){
      stack.pop()
    }else{
      stack.push(string[i])
    }
  }
  return stack.length === 0;
}