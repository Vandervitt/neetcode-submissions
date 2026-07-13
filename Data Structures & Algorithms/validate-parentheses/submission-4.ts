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

        for (let i = 0; i < s.length; i++) {
            const str = s[i];

            // if (!(str in matchMap)) {
            //     stack.push(str);
            // } else if (matchMap[str] === stack[stack.length - 1]) {
            //     stack.pop();
            // } else {
            //     return false;
            // }

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
