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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if (root === null) {
            return true;
        }

        const maxDepth = (currRoot: TreeNode | null): number | false => {
            if (currRoot === null) {
                return 0;
            }

            const leftDepth = maxDepth(currRoot.left);
            if (leftDepth === false) {
                return false;
            }

            const rightDepth = maxDepth(currRoot.right);
            if (rightDepth === false) {
                return false;
            }

            if (Math.abs(leftDepth - rightDepth) > 1) {
                return false;
            }

            return Math.max(leftDepth, rightDepth) + 1;
        };

        return maxDepth(root) !== false;
    }
}
