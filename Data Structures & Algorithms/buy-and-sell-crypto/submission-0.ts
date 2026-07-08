class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left = 0;
        let right = 1;
        let maxProfit = 0;

        while (right < prices.length) {
            // 如果未来的某一天的价格大于买入的那天的价格
            // 这时候计算出收益并与已存在的最大收益做对比更新最大收益
            if (prices[left] < prices[right]) {
                maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
            } else {
                // 反之则需要更新买入的时间
                left = right;
            }
            // 不断地移动 right，看未来的价格
            right++;
        }

        return maxProfit;
    }
}
