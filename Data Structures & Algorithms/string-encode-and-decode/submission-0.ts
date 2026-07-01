class Solution {
    private splitSign = "#";
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";

        for (const str of strs) {
            result += str.length + this.splitSign + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result = [];

        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== this.splitSign) {
                j++;
            }

            const length = parseInt(str.substring(i, j));

            result.push(str.slice(j + 1, j + length + 1));

            i = j + length + 1;
        }

        return result;
    }
}
