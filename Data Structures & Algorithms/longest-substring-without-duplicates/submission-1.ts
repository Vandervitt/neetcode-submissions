class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0;
        let right = 0;
        let maxLen = 0;
        let seen = new Set<string>();

        while(right < s.length){
            while(seen.has(s[right])){
                seen.delete(s[left]);
                left++;
            }

            seen.add(s[right]);
            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }

        return maxLen;
    }
}
