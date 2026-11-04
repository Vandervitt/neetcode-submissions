class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        if (digits.length === 0) {
            return [];
        }

        const letters: Record<string, string> = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        };

        const result: string[] = [];
        const path: string[] = [];

        function backtrack(index: number): void {
            if (index === digits.length) {
                result.push(path.join(""));
                return;
            }

            for (const letter of letters[digits[index]]) {
                path.push(letter);
                backtrack(index + 1);
                path.pop();
            }
        }

        backtrack(0);
        return result;
    }
}
