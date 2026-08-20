class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = new Array<number>(nums.length).fill(1);

        for(let i = 1; i < nums.length; i++) {
            result[i] = nums[i - 1] * result[i - 1];
        }

        let suffix = 1;

        for(let j = nums.length - 1; j >= 0; j--) {
            result[j] = result[j] * suffix;
            suffix *= nums[j];
        }

        return result;
    }
}
