class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let result = 0;
        while (left < right) {
            const height = Math.min(heights[left], heights[right]);
            const width = right - left;
            result = Math.max(result, height * width);

            if (heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return result;
    }
}
