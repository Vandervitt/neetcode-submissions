class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left = 0;
        let right = 0;
        const charMap = new Map<string, number>();
        let maxLen = 0;
        let maxFrequency = 0;

        while (right < s.length) {
            const rightChar = s[right];
            charMap.set(rightChar, (charMap.get(rightChar) ?? 0) + 1);
            // 更新 maxFrequency
            maxFrequency = Math.max(maxFrequency, charMap.get(rightChar)!);
            // 当前窗口的长度
            // const currentWindowLen = right - left + 1;
            while (right - left + 1 - maxFrequency > k) {
                const leftChar = s[left];
                charMap.set(leftChar, charMap.get(leftChar)! - 1);
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }

        return maxLen;
    }
}
