class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";

        for (const str of strs) {
            result += str.replaceAll("#", "##") + "#;";
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result: string[] = [];

        let i = 0;
        let cur = "";

        while (i < str.length) {
            if (str[i] === "#") {
                // 这是字符的开头，那就清空 cur
                if (str[i + 1] === "#") {
                    cur += "#";
                    i += 2;
                } else if (str[i + 1] === ";") {
                    // 这是结尾
                    result.push(cur);
                    cur = "";
                    i += 2;
                } else {
                    i++;
                }
            } else {
                cur += str[i];
                i++;
            }
        }

        return result;
    }
}
