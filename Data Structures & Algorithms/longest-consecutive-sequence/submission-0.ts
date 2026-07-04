class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // 1. 先把所有数字存入 Set，实现 O(1) 的查找，并自然去重
        const numSet = new Set<number>(nums);
        let longestStreak = 0;

        // 2. 遍历集合中的每一个数字
        for (const num of numSet) {
            // 关键：只有当 num - 1 不在集合中时，num 才是某条连续序列的“起点”
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                // 从起点开始，不断匹配下一个连续的数字
                while (numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                // 全局对比，取最大长度（不会被后面的短序列清零）
                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }

        return longestStreak;
    }
}
