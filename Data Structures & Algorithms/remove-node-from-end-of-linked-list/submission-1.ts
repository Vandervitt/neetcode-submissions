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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        const dummyNode: ListNode | null = new ListNode(0, head);
        let slowNode = dummyNode;
        let fastNode = dummyNode;

        // 先让快指针前进 n + 1 步
        for (let step = 0; step <= n; step++) {
            fastNode = fastNode!.next;
        }

        while (fastNode !== null) {
            slowNode = slowNode.next;
            fastNode = fastNode.next;
        }
        // 这时候慢指针的位置就是 倒数 第 n + 1 个，慢指针的 next 就是倒数第 n 个

        slowNode.next = slowNode.next.next;

        return dummyNode.next;
    }
}
