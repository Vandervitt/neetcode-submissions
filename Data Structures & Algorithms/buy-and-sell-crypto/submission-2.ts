class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left = 0;
        let right = 1;
        let result = 0;

        while(right < prices.length) {
            if(prices[left] < prices[right]){
                result = Math.max(result, prices[right] - prices[left]);
            } else {
                left = right;
            }
            right++;
        }

        return result;
    }
}
