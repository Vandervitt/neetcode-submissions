class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const matchMap = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        const stack: string[] = [];

        for (const str of s) {
            if (str in matchMap) {
                if (matchMap[str] !== stack[stack.length - 1]) {
                    return false;
                } else {
                    stack.pop();
                }
            } else {
                stack.push(str);
            }
        }

        return stack.length === 0;
    }
}
