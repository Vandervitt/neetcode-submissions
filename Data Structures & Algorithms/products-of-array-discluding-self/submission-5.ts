class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const left = new Array<number>(n).fill(1);
        const right = new Array<number>(n).fill(1);

        for(let i = 1; i < n; i++) {
            left[i] = left[i - 1] * nums[i - 1];
        }

        for(let j = n - 2; j >= 0; j--) {
            right[j] = right[j + 1] * nums[j + 1];
        }

        return left.map((ele, index) => {
            return ele * right[index];
        })
    }
}
