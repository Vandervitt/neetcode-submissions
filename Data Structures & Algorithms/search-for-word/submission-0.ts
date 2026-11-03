class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        if (word.length === 0) {
            return true;
        }

        const rows = board.length;
        const cols = board[0]?.length ?? 0;

        if (rows === 0 || cols === 0) {
            return false;
        }

        if (word.length > rows * cols) {
            return false;
        }

        const visited = Array.from(
            {
                length: rows,
            },
            () => new Array<boolean>(cols).fill(false),
        );

        function dfs(row: number, col: number, index: number): boolean {
            if (row < 0 || row >= rows || col < 0 || col >= cols) {
                return false;
            }

            if (visited[row][col] || board[row][col] !== word[index]) {
                return false;
            }

            if (index === word.length - 1) {
                return true;
            }

            visited[row][col] = true;

            const found =
                dfs(row - 1, col, index + 1) ||
                dfs(row + 1, col, index + 1) ||
                dfs(row, col - 1, index + 1) ||
                dfs(row, col + 1, index + 1);

            visited[row][col] = false;

            return found;
        }

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (dfs(row, col, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
