class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result: number[][] = [];

        // Sort numbers
        nums.sort((a, b) => a - b);

        // Use loop to calculate sum to each numbers
        for (let i = 0; i < nums.length; i++) {
            // If current number bigger than 0, directly return
            // because after numbers muse be bigger this
            if (nums[i] > 0) {
                break;
            }

            // Skip duplicate number
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            // Initial two poninters
            let left = i + 1;
            let right = nums.length - 1;

            // Move to center from the begginng and the ends
            while (left < right) {
                // Get the sum
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    // If sum equals 0 and push the array into result
                    result.push([nums[i], nums[left], nums[right]]);

                    // Skip dulplicate numbers for left pointer
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip dulplicate numbers for right pointer
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    // and update left and right
                    left++;
                    right--;
                } else if (sum < 0) {
                    // If the sum is not bigger 0
                    // Move left pointer to center
                    left++;
                } else {
                    // If the sum is bigger 0
                    // Move right pointer to center
                    right--;
                }
            }
        }

        return result;
    }
}
