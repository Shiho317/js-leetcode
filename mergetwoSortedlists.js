//Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

const mergeTwoLists = (li1, li2) => {
  const head = new ListNode(0);
  const now = head;
  const p1 = li1;
  const p2 = li2

  while(p1 || p2){
    if(p1 === null || (p2 !== null && p2.val < p1.val)){
      now.next = p2;
      p2 = p2.next;
    }else{
      now.next = p1;
      p1 = p1.next;
    }
    now = now.next;
  }
  return head.next;
}
