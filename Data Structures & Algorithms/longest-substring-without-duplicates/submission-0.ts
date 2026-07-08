class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0;
        let right = 0;
        let maxLen = 0;
        const set = new Set<string>();

        while (right < s.length) {
            // 从左到右依次移除在 left -> right 段的重复元素 
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            // 添加新的元素并计算长度和向右移动
            set.add(s[right]);
            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }

        return maxLen;
    }
}
