class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (s.length < t.length) {
            return "";
        }

        // 统计 t 的字符出现的频次和种类
        const targetMap = new Map<string, number>();
        for (let i = 0; i < t.length; i++) {
            const char = t[i];
            targetMap.set(char, (targetMap.get(char) ?? 0) + 1);
        }
        const needKinds = targetMap.size;

        let left = 0;
        let have = 0;
        let bestStart = 0;
        let bestLength = Infinity;
        let windowMap = new Map<string, number>();

        for (let right = 0; right < s.length; right++) {
            const currChar = s[right];
            windowMap.set(currChar, (windowMap.get(currChar) ?? 0) + 1);
            if (targetMap.has(currChar) && windowMap.get(currChar)! === targetMap.get(currChar)!) {
                have++;
            }

            while (have === needKinds) {
                // 记录答案
                const currentLength = right - left + 1;
                if (currentLength < bestLength) {
                    bestStart = left;
                    bestLength = currentLength;
                }

                // 缩小窗口
                const leftChar = s[left];
                if(targetMap.has(leftChar) && windowMap.get(leftChar)! === targetMap.get(leftChar)!){
                    have--;
                }
                windowMap.set(leftChar, windowMap.get(leftChar)! - 1);
                left++;
            }
        }

        return bestLength === Infinity ? "" : s.slice(bestStart, bestStart + bestLength);
    }
}
