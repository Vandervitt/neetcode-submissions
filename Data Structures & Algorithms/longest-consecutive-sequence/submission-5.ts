class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(nums.length === 0){
            return 0;
        }
        const sorted = [...nums].sort((a, b) => a - b);

        let maxLen = 1;
        let currLen = 1;
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i] === sorted[i - 1]) {
                continue;
            } else if (sorted[i] === sorted[i - 1] + 1){
                currLen++;
            } else {
                currLen = 1;
            }
            maxLen = Math.max(maxLen, currLen);
        }

        return maxLen;
    }
}
