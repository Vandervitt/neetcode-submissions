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
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        if(root === null){
            return 0;
        }

        let maxDiameter = 0;

        const maxDepth = (r: TreeNode | null): number => {
            if(r === null){
                return 0;
            }

            const leftDepth = maxDepth(r.left);
            const rightDepth = maxDepth(r.right);

            maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

            return Math.max(leftDepth, rightDepth) + 1;
        }

        maxDepth(root);

        return maxDiameter;
    }
}
