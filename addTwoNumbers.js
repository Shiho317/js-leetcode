//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

//You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// linked list

// const addTwoNums = (num1, num2) => {
//   let arr = [];
//   let total;

//   const reNum1 = num1.reverse();
//   const reNum2 = num2.reverse();

//   for(let i = 0; i < reNum1.length; i++){
//     const calcNum = reNum1[i] + reNum2[i];

//     if(calcNum >= 10){
//         arr[i - 1] += 1
//         total = calcNum  - 10;
      
//     }else{
//       total = calcNum
//     }

//     arr.push(total)
//   }

//   const reArr = arr.reverse()

//   return reArr
// };

// const num1 = [2, 4, 3];
// const num2 = [5, 6, 4];

// console.log(addTwoNums(num1, num2))

function ListNode(val)  {
  this.val = val;
  this.next = null;
}

const addTwoNums = function(list1, list2){
  let carry = 0;
  let sum = 0;
  let head = new ListNode(0);
  let now = head;
  let a = list1;
  let b = list2;

  while(a !== null || b !== null){
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    now.next = new ListNode(sum % 10);
    now = now.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if(carry) now.next = new ListNode(carry);
    return head.next;
  
}

const num1 = [2, 4, 3];
const num2 = [5, 6, 4];

console.log(addTwoNums(num1, num2))