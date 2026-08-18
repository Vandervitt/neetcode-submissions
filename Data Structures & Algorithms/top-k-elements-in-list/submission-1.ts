class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts = new Map<number, number>();

        for (const n of nums) {
            let count = counts.get(n);
            if (count === undefined) {
                count = 0;
            }
            count++;
            counts.set(n, count);
        }

        const buckets = Array.from(
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
            result.push(...buckets[f]);
        }

        return result;
    }
}
