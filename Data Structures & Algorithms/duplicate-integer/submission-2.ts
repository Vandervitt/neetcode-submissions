class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // Use Set`s unique feature to remove duplicate numbers and
        // check whether Set`s size equals the original array`s length
        return new Set(nums).size !== nums.length;
    }
}
