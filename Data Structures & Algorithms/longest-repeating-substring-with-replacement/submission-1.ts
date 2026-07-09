class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left = 0;
        let right = 0;
        let maxLen = 0;
        let charMap = new Map<string, number>();
        let maxCount = 0;

        while (right < s.length) {
            const rightChar = s[right];
            charMap.set(rightChar, (charMap.get(rightChar) || 0) + 1);
            maxCount = Math.max(maxCount, charMap.get(rightChar)!);

            if (right - left + 1 - maxCount > k) {
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
