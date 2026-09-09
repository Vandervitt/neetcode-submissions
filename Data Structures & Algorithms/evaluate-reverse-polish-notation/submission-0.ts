class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];
        const map = ["+", "-", "*", "/"];

        for (const str of tokens) {
            if (map.includes(str)) {
                // 拿出操作数做运算
                const right: number = Number(stack.pop());
                const left: number = Number(stack.pop());

                switch (str) {
                    case "+":
                        stack.push(left + right);
                        break;
                    case "-":
                        stack.push(left - right);
                        break;
                    case "*":
                        stack.push(left * right);
                        break;
                    case "/":
                        stack.push(Math.trunc(left / right));
                }
            } else {
                stack.push(Number(str));
            }
        }

        return stack[0];
    }
}
