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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        const dummy = new ListNode();
        let tail = dummy;

        let currNode1 = list1;
        let currNode2 = list2;

        while (currNode1 !== null && currNode2 !== null) {
            const value1 = currNode1.val;
            const value2 = currNode2.val;
            let selectNode = null;
            if (value1 <= value2) {
                // 处理 currNode1，将其接入
                // 然后向后移动 currNode1
                selectNode = currNode1;
                currNode1 = selectNode.next;
            } else {
                // 处理 currNode2
                // 然后向后移动 currNode2
                selectNode = currNode2;
                currNode2 = selectNode.next;
            }

            // tail 始终是尾节点，需要将 selectnode 连接到 tail 之后
            tail.next = selectNode;
            tail = selectNode;
        }

        tail.next = currNode1 ?? currNode2;

        return dummy.next;
    }
}
