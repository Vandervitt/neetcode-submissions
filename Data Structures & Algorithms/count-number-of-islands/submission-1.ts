class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const rows = grid.length;
        if (rows === 0) {
            return 0;
        }
        const cols = grid[0].length;
        // 不修改输入，用独立的 visited 记录格子是否已经被发现；每一行各自创建。
        const visited: boolean[][] = Array.from({ length: rows }, () =>
            new Array(cols).fill(false),
        );
        // 上、下、左、右；斜对角不算相连。
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        let count = 0;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                // 未访问的陆地说明它所在的岛之前没有被扫描到：计数一次，再用队列标记整座岛。
                if (grid[row][col] !== "1" || visited[row][col]) {
                    continue;
                }
                count++;
                // 队列只存「已发现、还没检查邻居」的格子，每项是 [行, 列]。
                // 用 head 指针代替 shift()，出队不需要移动数组里剩余的元素。
                const queue: [number, number][] = [[row, col]];
                // 标记与入队同时发生：同一个格子被多个邻居发现时，只有第一次能入队。
                visited[row][col] = true;
                let head = 0;
                while (head < queue.length) {
                    const [curRow, curCol] = queue[head++];
                    for (const [dRow, dCol] of directions) {
                        const nextRow = curRow + dRow;
                        const nextCol = curCol + dCol;
                        // 必须先判越界，再读 grid[nextRow][nextCol]。
                        if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) {
                            continue;
                        }
                        if (grid[nextRow][nextCol] !== "1" || visited[nextRow][nextCol]) {
                            continue;
                        }
                        visited[nextRow][nextCol] = true;
                        queue.push([nextRow, nextCol]);
                    }
                }
            }
        }
        return count;
    }
}
