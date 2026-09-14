class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let leftArr = 0;
        let rightArr = matrix.length - 1;

        while (leftArr <= rightArr) {
            const midArr = leftArr + Math.floor((rightArr - leftArr) / 2);
            const leftNum = matrix[midArr][0];
            const rightNum = matrix[midArr][matrix[midArr].length - 1];

            // 如果当前子数组的最小值大于 target
            // 那么就该去更左侧寻找
            if (target < leftNum) {
                // 在之前
                rightArr = midArr - 1;
            } else if (target > rightNum) {
                leftArr = midArr + 1;
            } else {
                // 就在当前这个子数组中
                // 再来一次二分查找
                const nums = matrix[midArr];
                let left = 0;
                let right = nums.length - 1;

                while (left <= right) {
                    const mid = left + Math.floor((right - left) / 2);
                    if (nums[mid] === target) {
                        return true;
                    }
                    if (nums[mid] < target) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                }

                return false;
            }
        }

        return false;
    }
}
