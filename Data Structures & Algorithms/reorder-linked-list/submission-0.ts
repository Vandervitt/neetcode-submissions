/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

function reverseListIterative(head: ListNode | null): ListNode | null {
    // previousNode 是已反转部分的头；初始时这部分为空。
    let previousNode: ListNode | null = null;

    // currentNode 是尚未处理部分的头；它变为 null 时说明所有节点都已反转。
    let currentNode: ListNode | null = head;

    while (currentNode !== null) {
        // 必须在修改 currentNode.next 前保存后继，否则会失去尚未处理的剩余链表。
        const nextNode = currentNode.next;

        // 当前节点改为指向已反转部分，使它成为这部分新的头节点。
        currentNode.next = previousNode;

        // 两个分段各向前推进一个节点：当前节点归入已反转部分，处理位置移到原后继。
        previousNode = currentNode;
        currentNode = nextNode;
    }

    // currentNode 已越过原尾节点，previousNode 正好停在反转后的新头节点。
    return previousNode;
}

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (head === null || head.next === null) {
            return;
        }

        // 先找到中间节点
        let slowNode: ListNode | null = head;
        let fastNode: ListNode | null = head;

        while (fastNode !== null && fastNode.next !== null) {
            slowNode = slowNode.next;
            fastNode = fastNode.next.next;
        }

        const secondHalfHead: ListNode | null = slowNode.next;
        slowNode.next = null;

        let secondNode: ListNode | null = reverseListIterative(secondHalfHead);
        let firstNode: ListNode | null = head;

        while(secondNode !== null) {
            const nextFirstNode: ListNode | null = firstNode!.next;
            const nextSecondNode: ListNode | null = secondNode!.next;

            firstNode.next = secondNode;
            secondNode.next = nextFirstNode;

            firstNode = nextFirstNode;
            secondNode = nextSecondNode;
        }
    }
}
