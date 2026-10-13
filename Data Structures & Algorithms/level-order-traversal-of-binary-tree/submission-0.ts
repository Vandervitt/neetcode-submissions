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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(root === null) {
            return [];
        }

        const result: number[][] = [];
        const queue: TreeNode[] = [root];
        let front = 0;

        while(front < queue.length) {
            // 固定本层的数量
            const levelValues:number[] = [];
            const levelSize = queue.length - front;

            // 处理这一层
            for(let count = 0; count < levelSize; count++) {
                const currentNode = queue[front++];
                levelValues.push(currentNode.val);

                currentNode.left && queue.push(currentNode.left);
                currentNode.right && queue.push(currentNode.right);
            } 

            result.push(levelValues);
        }

        return result;
    }
}
