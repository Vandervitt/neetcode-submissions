class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const result: number[][] = [];
        const path: number[] = [];

        function dfs(start: number, remaining: number): void {
            if (remaining === 0) {
                result.push([...path]);
                return;
            }

            for (let i = start; i < nums.length; i++) {
                if (nums[i] > remaining) {
                    continue;
                }

                path.push(nums[i]);

                dfs(i, remaining - nums[i]);

                path.pop();
            }
        }

        dfs(0, target);

        return result;
    }
}
