class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const result: string[][] = [];
        const path: string[] = [];

        function isPalindrome(left: number, right: number): boolean {
            while (left < right) {
                if (s[left] !== s[right]) {
                    return false;
                }
                left++;
                right--;
            }
            return true;
        }

        function backtrack(start: number): void {
            if (start === s.length) {
                result.push([...path]);
                return;
            }

            for (let end = start; end < s.length; end++) {
                if (!isPalindrome(start, end)) {
                    continue;
                }

                path.push(s.slice(start, end + 1));
                backtrack(end + 1);
                path.pop();
            }
        }

        backtrack(0);
        return result;
    }
}
