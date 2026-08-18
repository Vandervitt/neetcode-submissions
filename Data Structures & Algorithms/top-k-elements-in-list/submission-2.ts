class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts = new Map<number, number>();

        for (const n of nums) {
            counts.set(n, (counts.get(n) ?? 0) + 1);
        }

        const buckets: number[][] = Array.from(
            {
                length: nums.length + 1,
            },
            () => [],
        );

        for (const [num, freq] of counts) {
            buckets[freq].push(num);
        }

        const result: number[] = [];
        for (let f = nums.length; f >= 1 && result.length < k; f--) {
            for (const n of buckets[f]) {
                if (result.length === k) {
                    return;
                }
                result.push(n);
            }
        }

        return result;
    }
}
