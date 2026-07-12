class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        // 边界条件：如果 s 比 t 还要短，倾家荡产也凑不齐，直接返回空串
        if (s.length < t.length) return "";

        // 1. 统计目标字符串 t 中各个字符的需求量（目标点名册）
        const tMap = new Map<string, number>();
        for (const char of t) {
            tMap.set(char, (tMap.get(char) || 0) + 1);
        }

        // 2. 得到总共需要搞定多少个“不同字母”的指标
        const requiredMatches = tMap.size;

        // 3. 初始化滑动窗口的各种状态变量
        const windowMap = new Map<string, number>(); // 窗口打卡机：记录当前窗帘内部的字符数量
        let left = 0;
        let right = 0;
        let matchedCount = 0; // 当前已经有多少个不同字母的份额完全达标了

        // 4. 记录最终答案的变量（用来切出最短子串）
        let minLen = Infinity; // 记录历史最短长度，初始设为无穷大
        let startIdx = 0;      // 记录最短子串的起始索引

        // 5. 右指针开始开疆拓土
        while (right < s.length) {
            const rightChar = s[right];

            // 如果当前进圈的字符是 t 里面需要的
            if (tMap.has(rightChar)) {
                // 在窗口打卡机里记录它
                windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1);

                // 核心卡点：只有当窗口内的数量“刚好等于”需求量时，才算彻底搞定一个字母的指标
                if (windowMap.get(rightChar) === tMap.get(rightChar)) {
                    matchedCount++;
                }
            }

            // 6. 只要当前窗口完全对上了（所有指标全部达标），左指针立刻开始清理门户（收缩窗口）
            while (matchedCount === requiredMatches) {
                const currentWindowLen = right - left + 1;
                
                // 如果当前窗口比历史记录还要短，赶紧记账更新
                if (currentWindowLen < minLen) {
                    minLen = currentWindowLen;
                    startIdx = left;
                }

                const leftChar = s[left];

                // 如果即将被踢出圈的这个左边字符是 t 里面需要的
                if (tMap.has(leftChar)) {
                    // 核心卡点：如果当前数量刚好卡在及格线上，再拆走一个可就不及格了！
                    if (windowMap.get(leftChar) === tMap.get(leftChar)) {
                        matchedCount--; // 这个字母的指标宣告破产
                    }
                    // 在窗口打卡机里把它的数量减 1
                    windowMap.set(leftChar, windowMap.get(leftChar)! - 1);
                }

                // 左指针右移，尝试继续缩小窗口看能不能更短
                left++;
            }

            // 右指针继续扩张
            right++;
        }

        // 7. 返回结果：如果 minLen 还是无穷大，说明从没成功对上过，返回 ""；否则切出对应的子串
        return minLen === Infinity ? "" : s.substring(startIdx, startIdx + minLen);
    }
}