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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number | null {
        const result: number[] = [];
        const inOrder = (currNode: TreeNode | null): void => {
            if (currNode === null) {
                return;
            }
            // 先处理左边数
            inOrder(currNode.left);
            // 处理当前值
            result.push(currNode.val);
            // 再处理右子树
            inOrder(currNode.right);
        };
        inOrder(root);
        return result[k - 1] ?? null;
    }
}
