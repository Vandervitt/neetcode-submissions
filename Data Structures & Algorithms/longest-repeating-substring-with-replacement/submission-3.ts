class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left = 0;
        let maxLen = 0;
        let maxFrequency = 0;
        const frequency = new Map<string, number>();

        for (let right = 0; right < s.length; right++) {
            const rightChar = s[right];
            frequency.set(rightChar, (frequency.get(rightChar) ?? 0) + 1);
            maxFrequency = Math.max(maxFrequency, frequency.get(rightChar));

            while(right - left + 1 - maxFrequency > k) {
                const leftChar = s[left];
                frequency.set(leftChar, frequency.get(leftChar)! - 1);
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
