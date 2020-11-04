
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    const getString = () =>{
        let result = '';
        let curr = head;
        while(curr){
            result += curr.val;
            curr = curr.next;
        }
        return result;
     }
    if(!head)
      return 0; 
    const value = getString();
    const ans = parseInt(value, 2);
    return ans;

};