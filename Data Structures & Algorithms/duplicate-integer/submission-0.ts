class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // use Map to log the count fo element
        const map = new Map<number, number>();

        for (const n of nums) {
            // increase count
            map.set(n, (map.get(n) || 0) + 1);

            // check if the count greater than 1
            if (map.get(n) > 1) {
                return true;
            }
        }

        // default return
        return false;
    }
}
