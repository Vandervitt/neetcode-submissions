class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // if (s.length === 0) {
        //     return true;
        // }

        const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        let left = 0;
        let right = cleanStr.length - 1;

        while (left < right) {
            const leftStr = cleanStr[left];
            const rightStr = cleanStr[right];

            if (leftStr !== rightStr) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
