class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const nums = [...candidates].sort((a, b) => a - b);
        const result: number[][] = [];
        const path: number[] = [];

        function dfs(start: number, remaining: number): void {
            if(remaining === 0) {
                result.push([...path]);
                return;
            }

            for(let i = start; i < nums.length; i++) {
                if(i > start && nums[i] === nums[i - 1]) {
                    continue;
                }

                if(nums[i] > remaining){
                    break;
                }

                path.push(nums[i]);

                dfs(i + 1, remaining - nums[i]);

                path.pop();
            }
        }

        dfs(0, target);

        return result;
    }
}
