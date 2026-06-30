class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // Use a Map to track each number's frequency
        const frequentMap = new Map<number, number>();

        for (const num of nums) {
            // Increment frequency for the current number
            frequentMap.set(num, (frequentMap.get(num) || 0) + 1);
        }

        // Convert an array and sort by their frequency in descending order
        const frequentArr = [...frequentMap.entries()].sort((a, b) => b[1] - a[1]);

        // Extract and return the top k elements
        return frequentArr.slice(0, k).map((ele) => ele[0]);
    }
}
