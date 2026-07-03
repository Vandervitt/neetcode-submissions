class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        // Track left other elements product for every number; 
        let leftProduct = [];
        // First number of left product is 1
        leftProduct[0] = 1;

        // Calculate left product of current number
        for (let i = 1; i < nums.length; i++) {
            leftProduct[i] = nums[i - 1] * leftProduct[i - 1];
        }

        // Multy right product of current number
        let rightProduct = 1;
        for (let j = nums.length - 1; j >= 0; j--) {
            leftProduct[j] = leftProduct[j] * rightProduct;
            rightProduct *= nums[j];
        }

        return leftProduct;
    }
}
