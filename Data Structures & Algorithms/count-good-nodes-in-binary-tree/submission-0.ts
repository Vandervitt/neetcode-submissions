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
    goodNodes(root: TreeNode | null): number {
        const dfs = (currNode: TreeNode | null, pathMax: number): number => {
            if (currNode === null) {
                return 0;
            }

            const currCount = currNode.val >= pathMax ? 1 : 0;
            const nextPathMax = Math.max(pathMax, currNode.val);

            const leftCount = dfs(currNode.left, nextPathMax);
            const rightCount = dfs(currNode.right, nextPathMax);

            return currCount + leftCount + rightCount;
        };

        return dfs(root, -Infinity);
    }
}
