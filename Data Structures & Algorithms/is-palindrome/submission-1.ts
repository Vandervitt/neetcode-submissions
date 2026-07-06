class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        return cleanStr === cleanStr.split("").reverse().join("");
    }
}
