class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        if(nums.length === 0){
            return 0;
        }

        const seen = new Set(nums);

        let maxLen = 0;

        for(const n of nums) {
            if(!seen.has(n - 1)){
                // 则当前元素是一个 起点
                let currNum = n;
                let currLen = 1;

                while(seen.has(currNum + 1)){
                    currNum += 1;
                    currLen++;
                }

                maxLen = Math.max(maxLen, currLen);
            }   
        }

        return maxLen;
    }
}
