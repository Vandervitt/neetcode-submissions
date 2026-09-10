class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = position.map((currentPosition, index) => {
            return { position: currentPosition, speed: speed[index] };
        });

        cars.sort((a, b) => b.position - a.position);

        const fleetTimes: number[] = [];

        for (const car of cars) {
            const currentTime = (target - car.position) / car.speed;

            if (fleetTimes.length === 0) {
                fleetTimes.push(currentTime);
                continue;
            }

            const frontFleetTime = fleetTimes[fleetTimes.length - 1];

            if (currentTime > frontFleetTime) {
                fleetTimes.push(currentTime);
            }
        }

        return fleetTimes.length;
    }
}
