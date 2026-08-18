class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const packed = nums.map((n , i):[number, number] => [n, i]);
        packed.sort((a, b) => a[0] - b[0]);
        let left = 0;
        let right = packed.length - 1;

        while(left < right) {
            const sum = packed[left][0] + packed[right][0];
            if(sum < target){
                left++;
            } else if(sum > target) {
                right--;
            } else {
                return [packed[left][1], packed[right][1]];
            }
        }

        return []
    }
}
