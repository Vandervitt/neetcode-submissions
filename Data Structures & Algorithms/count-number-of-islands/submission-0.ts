class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        if (grid.length === 0) {
            return 0;
        }

        let result: number = 0;
        const visited: boolean[][] = Array.from(
            {
                length: grid.length,
            },
            () => new Array(grid[0].length).fill(false),
        );

        function dfs(rowI: number, columnI: number) {
            // 上
            if (rowI - 1 >= 0 && grid[rowI - 1][columnI] === "1" && !visited[rowI - 1][columnI]) {
                visited[rowI - 1][columnI] = true;
                dfs(rowI - 1, columnI);
            }
            // 下
            if (
                rowI + 1 < grid.length &&
                !visited[rowI + 1][columnI] &&
                grid[rowI + 1][columnI] === "1"
            ) {
                visited[rowI + 1][columnI] = true;
                dfs(rowI + 1, columnI);
            }
            // 左
            if (
                columnI - 1 >= 0 &&
                !visited[rowI][columnI - 1] &&
                grid[rowI][columnI - 1] === "1"
            ) {
                visited[rowI][columnI - 1] = true;
                dfs(rowI, columnI - 1);
            }
            // 右
            if (
                columnI + 1 < grid[0].length &&
                !visited[rowI][columnI + 1] &&
                grid[rowI][columnI + 1] === "1"
            ) {
                visited[rowI][columnI + 1] = true;
                dfs(rowI, columnI + 1);
            }
        }

        // 外层循环去遍历每一个元素
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                const currEle = grid[i][j];
                if (visited[i][j] === true) {
                    continue;
                }

                if (currEle === "1") {
                    result++;
                    visited[i][j] = true;
                    // 去探索它的上下左右
                    dfs(i, j);
                }
            }
        }

        return result;
    }
}
