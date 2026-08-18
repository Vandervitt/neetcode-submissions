class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const need = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if (need.has(diff)) {
                return [need.get(diff)!, i];
            }

            need.set(nums[i], i);
        }

        return [];
    }
}
