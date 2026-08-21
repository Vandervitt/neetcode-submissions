class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // 分为三个维度来判断
        // 行维度，列维度，box 维度
        // 遍历 board，将其中的元素按照各自归属放到对应的维度中

        const rows = Array.from({ length: 9 }, (): Set<string> => new Set());
        const columns = Array.from({ length: 9 }, (): Set<string> => new Set());
        const boxes = Array.from({ length: 9 }, (): Set<string> => new Set());

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const ele = board[i][j];

                if (ele === ".") {
                    continue;
                }

                const box = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rows[i].has(ele) || columns[j].has(ele) || boxes[box].has(ele)) {
                    return false;
                }

                rows[i].add(ele);
                columns[j].add(ele);
                boxes[box].add(ele);
            }
        }

        return true;
    }
}
