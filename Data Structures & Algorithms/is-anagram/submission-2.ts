class Solution {
    /**
     * Use a Map to track frequency of the each character
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const countMap = new Map<string, number>();

        for (const char of s) {
            // Increase count for each character
            countMap.set(char, (countMap.get(char) || 0) + 1);
        }

        for (const char of t) {
            // Decrease count for each character
            countMap.set(char, (countMap.get(char) || 0) - 1);

            // If conut drops below 0, t has more characters
            if (countMap.get(char) < 0) {
                return false;
            }
        }

        return true;
    }
}
