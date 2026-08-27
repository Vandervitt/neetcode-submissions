class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buyDay = 0;
        let sellDay = 1;
        let bestProfit = 0;

        while(sellDay < prices.length){
            
            if(prices[buyDay] < prices[sellDay]){
                bestProfit = Math.max(bestProfit, prices[sellDay] - prices[buyDay]);
            } else {
                buyDay = sellDay;
            }
            sellDay++;
        }

        return bestProfit;
    }
}
