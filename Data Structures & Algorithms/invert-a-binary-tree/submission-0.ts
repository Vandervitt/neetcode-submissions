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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if(root === null ) {
            return null;
        }

        const queue: TreeNode[] = [root];
        let front = 0;

        while(front < queue.length) {
            const currNode = queue[front++];
            const orignalLeft = currNode.left;
            currNode.left = currNode.right;
            currNode.right = orignalLeft;

            if(currNode.left !== null) {
                queue.push(currNode.left)
            }
            if(currNode.right !== null){
                queue.push(currNode.right);
            }
        }

        return root;
    }
}
