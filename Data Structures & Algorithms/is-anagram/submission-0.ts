class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // Return false，if their lengths are not equal。
        if (s.length !== t.length) {
            return false;
        }

        // Sort s and t
        const sortedS = s.split("").sort();
        const sortedT = t.split("").sort();

        // Join characters back into strings and compare them
        return sortedS.join("") === sortedT.join("");
    }
}
