class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        if (!nums || nums.length === 0 || k === 0) {
            return [];
        }

        const result: number[] = [];
        const queue: number[] = []; // 存的是元素的【索引】

        for (let i = 0; i < nums.length; i++) {
            // 1. 维护左边：如果队头的索引已经滑出了当前窗口范围，将其踢出
            if (queue.length > 0 && queue[0] < i - k + 1) {
                queue.shift();
            }

            // 2. 维护右边：新元素进队前，把队列尾部所有比当前元素小的“弱者”全部踢掉
            while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[i]) {
                queue.pop();
            }

            // 3. 将当前元素的索引推入队列尾部
            queue.push(i);

            // 4. 当第一个完整窗口形成后（即 i 达到 k - 1 及以上），开始记录队头最大值
            if (i >= k - 1) {
                result.push(nums[queue[0]]);
            }
        }

        return result;
    }
}