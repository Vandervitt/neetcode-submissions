class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left = 0;
        let maxLen = 0;
        // 记录出现最多的次数的字符
        let maxFrequency = 0;
        // 记录字符出现频次
        const frequency = new Map<string, number>();

        // 使用右指针遍历，在不断扩展右边的情况下处理其他逻辑
        for (let right = 0; right < s.length; right++) {
            // 对当前字符更新频次
            const rightChar = s[right];
            frequency.set(rightChar, (frequency.get(rightChar) ?? 0) + 1);
            // 更新最大频次
            maxFrequency = Math.max(maxFrequency, frequency.get(rightChar));

            // 判断当前窗口是否满足题意，不满足就收缩左指针并更新对应字符的出现频次
            while (right - left + 1 - maxFrequency > k) {
                const leftChar = s[left];
                frequency.set(leftChar, frequency.get(leftChar)! - 1);
                left++;
            }

            // 直到满足题意之后更新最终结果
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
