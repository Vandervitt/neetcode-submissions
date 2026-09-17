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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        const nodeSet = new Set<ListNode>();

        while (head !== null) {
            if (nodeSet.has(head)) {
                return true;
            }
            nodeSet.add(head);
            head = head.next;
        }

        return false;
    }
}
