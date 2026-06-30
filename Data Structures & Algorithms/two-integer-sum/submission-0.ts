class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // Use a Map to track seen element and their indices
        const diffMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            // Calculate the complement for the current element
            const diff = target - nums[i];

            // Check if the complement exists in our history
            if (diffMap.has(diff)) {
                return [diffMap.get(diff)!, i];
            }

            // Store the current element and its index for future lookups
            diffMap.set(nums[i], i);
        }

        // default return if no pair found
        return [];
    }
}
