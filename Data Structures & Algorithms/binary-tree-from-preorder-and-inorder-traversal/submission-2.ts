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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        const inorderIndex = new Map<number, number>();
        for (let i = 0; i < inorder.length; i++) {
            inorderIndex.set(inorder[i], i);
        }

        // 两段遍历表示同一棵子树：起点分别为 preStart、inStart，长度都为 size。
        // 范围左闭右开，原数组始终不变，不需要移除已经处理的根。
        const build = (preStart: number, inStart: number, size: number): TreeNode | null => {
            if (size === 0) {
                return null;
            }

            // 前序顺序是根、左、右，当前范围的首项必为当前根。
            const rootValue = preorder[preStart];
            const root = new TreeNode(rootValue);
            // 题目保证两种遍历合法且值唯一，所以根一定出现在对应的中序范围内。
            const rootIndex = inorderIndex.get(rootValue)!;
            // Map 给出的是原数组下标，减去当前中序起点才是左侧节点数量。
            const leftSize = rootIndex - inStart;
            const rightSize = size - leftSize - 1;

            // 跳过前序中的根后，紧接着的 leftSize 项就是左子树。
            root.left = build(preStart + 1, inStart, leftSize);
            // 右前序起点跳过根和完整左侧；右中序起点则紧邻中序中的根。
            root.right = build(preStart + 1 + leftSize, rootIndex + 1, rightSize);

            // 左右递归返回各自子树的根，连接后即可返回当前子树的根。
            return root;
        };

        return build(0, 0, preorder.length);
    }
}
