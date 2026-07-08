class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        while (left < right) {
            const height = Math.min(heights[left], heights[right]);
            const width = right - left;
            maxArea = Math.max(height * width, maxArea);

            // 需要移动较小的那个，因为面积是由较小的 height 决定的
            // 所以需要找到更高的
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }
}
