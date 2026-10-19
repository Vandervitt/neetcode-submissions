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
    isValidBST(root: TreeNode | null): boolean {
        const dfs = (currNode: TreeNode | null, lower: number, upper: number): boolean => {
            if (currNode === null) {
                return true;
            }

            if (currNode.val > lower && currNode.val < upper) {
                return (
                    dfs(currNode.left, lower, currNode.val) &&
                    dfs(currNode.right, currNode.val, upper)
                );
            } else {
                return false;
            }
        };

        return dfs(root, -Infinity, Infinity);
    }
}
