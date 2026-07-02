class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // const result = [];

        let leftProduct = [];
        leftProduct[0] = 1;

        for (let i = 1; i < nums.length; i++) {
            leftProduct[i] = nums[i - 1] * leftProduct[i - 1];
        }

        let rightProduct = 1;
        for (let j = nums.length - 1; j >= 0; j--) {
            leftProduct[j] = leftProduct[j] * rightProduct;
            rightProduct *= nums[j];
        }

        return leftProduct;
    }
}
