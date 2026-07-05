class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) {
            return 0;
        }

        const visitedSet = new Set(nums);
        let maxLen = 0;

        for (let num of nums) {
            // 仅仅是严格的起点才会进入 while
            if (!visitedSet.has(num - 1)) {
                // 这是一个严格的连续的起点
                let currentNum = num;
                let currentLen = 1;

                // 先后寻找连续的数字，直到找不到为止
                while (visitedSet.has(currentNum + 1)) {
                    currentNum++;
                    currentLen++;
                }
                // 更新最长的连续长度
                maxLen = Math.max(maxLen, currentLen);
            }
        }

        return maxLen;
    }
}
