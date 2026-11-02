class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const result: number[][] = [];
        const path: number[] = [];
        const used: boolean[] = new Array(nums.length).fill(false);

        function backtrack(): void {
            if (path.length === nums.length) {
                result.push([...path]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (used[i] === true) {
                    continue;
                }

                path.push(nums[i]);
                used[i] = true;

                backtrack();

                path.pop();
                used[i] = false;
            }
        }

        backtrack();
        return result;
    }
}
