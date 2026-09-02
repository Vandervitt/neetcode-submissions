class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const len = s1.length;
        if (len > s2.length) {
            return false;
        }

        const isEqual = (
            targetMap: Map<string, number>,
            windowMap: Map<string, number>,
        ): boolean => {
            for (let code = 97; code <= 122; code++) {
                const char = String.fromCharCode(code);
                if ((targetMap.get(char) ?? 0) !== (windowMap.get(char) ?? 0)) {
                    return false;
                }
            }
            return true;
        };

        const targetMap = new Map<string, number>();
        for (let i = 0; i < len; i++) {
            targetMap.set(s1[i], (targetMap.get(s1[i]) ?? 0) + 1);
        }

        const charMap = new Map<string, number>();

        let left = 0;
        for (let right = 0; right < s2.length; right++) {
            const char = s2[right];
            charMap.set(char, (charMap.get(char) ?? 0) + 1);

            if (right - left + 1 > len) {
                charMap.set(s2[left], charMap.get(s2[left])! - 1);
                left++;
            }

            if (right - left + 1 === len && isEqual(targetMap, charMap)) {
                return true;
            }
        }

        return false;
    }
}
