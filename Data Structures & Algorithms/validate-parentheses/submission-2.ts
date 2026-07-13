class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const matchMap = {
            "}": "{",
            ")": "(",
            "]": "[",
        };
        const stack = [];
        const leftMatch = "{([";

        for (let i = 0; i < s.length; i++) {
            const str = s[i];

            if (leftMatch.includes(str)) {
                stack.push(str);
            } else if (matchMap[str] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }

        return stack.length === 0;
    }
}
