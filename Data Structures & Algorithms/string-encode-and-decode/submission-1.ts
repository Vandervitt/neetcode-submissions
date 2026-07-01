class Solution {
    private splitSign = "#";
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";

        // Use format length#str to track each string
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
            // j is a start point of each string part
            let j = i;

            // Get the split sign's index
            while (str[j] !== this.splitSign) {
                j++;
            }

            // Parse the string length for this part
            const length = parseInt(str.substring(i, j));

            // Extract string form each part and push into the result
            result.push(str.slice(j + 1, j + length + 1));

            // Update the start point for next loop
            i = j + length + 1;
        }

        return result;
    }
}
