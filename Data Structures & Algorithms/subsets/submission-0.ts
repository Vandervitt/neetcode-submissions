class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const result: number[][] = [];
        const path: number[] = [];

        function dfs(index: number): void {
            if (index === nums.length) {
                result.push([...path]);
                return;
            }

            // 不选
            dfs(index + 1);

            // 选
            path.push(nums[index]);
            dfs(index + 1);

            // 撤销
            path.pop();
        }

        dfs(0);

        return result;
    }
}
