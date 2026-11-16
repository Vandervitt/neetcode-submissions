class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        if (grid.length === 0) {
            return 0;
        }

        let result = 0;
        const rows = grid.length;
        const cols = grid[0].length;
        const visited: boolean[][] = Array.from(
            {
                length: rows,
            },
            () => new Array(cols).fill(false),
        );

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        function dfs(row: number, col: number): number {
            if (row < 0 || row >= rows || col < 0 || col >= cols) {
                return 0;
            }
            if (grid[row][col] !== 1 || visited[row][col]) {
                return 0;
            }
            visited[row][col] = true;
            let area = 1;
            for (const [dRow, dCol] of directions) {
                area += dfs(row + dRow, col + dCol);
            }
            return area;
        }

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 1 && !visited[row][col]) {
                    const area = dfs(row, col);
                    result = Math.max(area, result);
                }
            }
        }

        return result;
    }
}
