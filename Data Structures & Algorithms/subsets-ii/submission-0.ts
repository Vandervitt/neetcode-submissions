class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const result: number[][] = [];
        const sorted = [...nums].sort((a, b) => a - b);
        const path: number[] = [];

        function backtrack(start: number): void {
            result.push([...path]);
            for (let i = start; i < sorted.length; i++) {
                if (i > start && sorted[i] === sorted[i - 1]) {
                    continue;
                }

                path.push(sorted[i]);
                backtrack(i + 1);
                path.pop();
            }
        }

        backtrack(0);

        return result;
    }
}
