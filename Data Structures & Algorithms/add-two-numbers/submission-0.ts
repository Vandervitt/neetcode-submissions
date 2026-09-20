/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        const dummy: ListNode = new ListNode(0);
        let carry = 0;

        let tailNode: ListNode | null = dummy;
        let currentNode1: ListNode | null = l1;
        let currentNode2: ListNode | null = l2;

        while(currentNode1 !== null || currentNode2 !== null || carry !== 0) {
            const val = carry + (currentNode1?.val ?? 0) + (currentNode2?.val ?? 0);
            carry = Math.floor(val / 10);
            tailNode.next = new ListNode(val % 10);

            tailNode = tailNode.next;

            currentNode1 = currentNode1?.next ?? null;
            currentNode2 = currentNode2?.next ?? null;
        }

        return dummy.next;
    }
}
