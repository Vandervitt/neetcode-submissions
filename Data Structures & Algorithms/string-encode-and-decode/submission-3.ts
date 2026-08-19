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
        const result: string[] = [];

        let i = 0;

        while (i < str.length) {
            let j = i;

            while(str[j] !== this.splitSign){
                j++;
            }

            const len = Number(str.slice(i, j));

            result.push(str.slice(j + 1, len + j + 1));

            i = len + j + 1;
        }

        return result;
    }
}
