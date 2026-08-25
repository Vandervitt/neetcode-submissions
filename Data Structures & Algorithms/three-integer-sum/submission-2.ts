class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted = [...nums].sort((a, b) => a - b);
        const result: number[][] = []

        for (let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i] > 0) {
                break;
            }

            if (i > 0 && sorted[i] === sorted[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = sorted.length - 1;

            while(left < right) {
                const sum = sorted[i] + sorted[left] + sorted[right];

                if(sum === 0){
                    result.push([sorted[i], sorted[left], sorted[right]]);

                    // 跳过相同的元素
                    while(left < right && sorted[left] === sorted[left + 1]) left++;
                    while(left < right && sorted[right] === sorted[right - 1]) right--;

                    // 更新指针
                    left++;
                    right--;

                } else if(sum > 0){
                    right--;
                } else {
                    left++;
                }
            }
        }

        return result;
    }
}
