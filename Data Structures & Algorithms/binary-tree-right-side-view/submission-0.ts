/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if (root === null) {
            return [];
        }

        const queue: TreeNode[] = [root];
        let front = 0;
        const result: number[] = [];

        while (front < queue.length) {
            const levelSize = queue.length - front;
            for (let count = 0; count < levelSize; count++) {
                const currentNode = queue[front++];
                if (count === levelSize - 1) {
                    result.push(currentNode.val);
                }

                if (currentNode.left !== null) {
                    queue.push(currentNode.left);
                }
                if (currentNode.right !== null) {
                    queue.push(currentNode.right);
                }
            }
        }

        return result;
    }
}
