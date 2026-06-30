class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // Track elements we have seen
        const visited = new Set<number>();

        for (const ele of nums) {
            // If element already exists in the Set
            if (visited.has(ele)) {
                return true;
            }

            // Otherwise, add it to the Set
            visited.add(ele);
        }

        // Default return
        return false;
    }
}
