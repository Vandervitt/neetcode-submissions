// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        const copiedNodeMap = new Map<Node, Node>();

        // 构建所有节点的副本
        let currentNode = head;
        while (currentNode !== null) {
            copiedNodeMap.set(currentNode, new Node(currentNode!.val));
            currentNode = currentNode!.next;
        }

        // 依据源节点之间的引用关系构建节点副本之间的引用关系
        currentNode = head;
        while (currentNode !== null) {
            const copiedNode = copiedNodeMap.get(currentNode);

            copiedNode.next = copiedNodeMap.get(currentNode?.next) ?? null;
            copiedNode.random = copiedNodeMap.get(currentNode?.random) ?? null;

            currentNode = currentNode.next;
        }

        return copiedNodeMap.get(head) ?? null;
    }
}
