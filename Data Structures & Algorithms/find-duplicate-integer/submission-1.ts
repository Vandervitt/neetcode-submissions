class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let slow = 0;
        let fast = 0;

        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow !== fast);

        let finderIndex = 0;
        while (finderIndex !== slow) {
            finderIndex = nums[finderIndex];
            slow = nums[slow];
        }

        return finderIndex;
    }
}
