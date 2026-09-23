class Solution {
      /**
       * @param {TreeNode} root
       * @return {TreeNode}
       */
      invertTree(root: TreeNode | null): TreeNode | null {
          // 空子树无需翻转。
          if (root === null) {
              return null;
          }

          // 先交换当前节点的左右孩子引用。
          const originalLeft = root.left;
          root.left = root.right;
          root.right = originalLeft;

          // 再深入两棵子树，让每个节点都完成同样的交换。
          this.invertTree(root.left);
          this.invertTree(root.right);

          // 节点是原地修改的，根节点仍是原来的 root。
          return root;
      }
  }