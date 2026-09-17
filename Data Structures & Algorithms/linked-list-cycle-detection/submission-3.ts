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

        let currentNode: ListNode | null = head;
        while (currentNode !== null) {
            if (nodeSet.has(currentNode)) {
                return true;
            }
            nodeSet.add(currentNode);
            currentNode = currentNode.next;
        }

        return false;
    }
}
