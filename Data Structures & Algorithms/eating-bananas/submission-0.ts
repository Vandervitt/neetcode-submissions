class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);
        // let answer = right;

        const getSumHours = (speed: number): number => {
            let sum = 0;
            for (const pile of piles) {
                sum += Math.ceil(pile / speed);
            }
            return sum;
        };

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            const sumHours = getSumHours(mid);

            if (sumHours <= h) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}
