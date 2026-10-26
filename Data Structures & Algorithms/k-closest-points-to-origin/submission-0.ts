class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const maxHeap: MaxHeap = new MaxHeap();

        for (const value of points) {
            maxHeap.add(value);
            if (maxHeap.size > k) {
                maxHeap.pop();
            }
        }

        return maxHeap.toArray();
    }
}

class MaxHeap {
    private readonly values: number[][] = [];

    get size() {
        return this.values.length;
    }

    add(value: number[]): void {
        this.values.push(value);
        this.shiftUp(this.size - 1);
    }

    pop(): number[] | undefined {
        if (this.size === 0) {
            return undefined;
        }

        const topValue = this.values[0];

        const lastValue = this.values.pop()!;

        if (this.size > 0) {
            this.values[0] = lastValue;
            this.shiftDown(0);
        }

        return topValue;
    }

    toArray(): number[][] {
        return [...this.values];
    }

    private shiftUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parentDis = this.values[parentIndex][0] ** 2 + this.values[parentIndex][1] ** 2;
            const currentDis = this.values[index][0] ** 2 + this.values[index][1] ** 2;
            if (parentDis >= currentDis) {
                break;
            }

            [this.values[index], this.values[parentIndex]] = [
                this.values[parentIndex],
                this.values[index],
            ];

            index = parentIndex;
        }
    }

    private shiftDown(index: number): void {
        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = leftIndex + 1;

            if (leftIndex >= this.size) {
                break;
            }

            const leftDis = this.values[leftIndex][0] ** 2 + this.values[leftIndex][1] ** 2;
            let lagerDis = leftDis;
            let lagerIndex = leftIndex;
            if (rightIndex < this.size) {
                const rightDis = this.values[rightIndex][0] ** 2 + this.values[rightIndex][1] ** 2;
                if (leftDis < rightDis) {
                    lagerDis = rightDis;
                    lagerIndex = rightIndex;
                }
            }

            const currentDis = this.values[index][0] ** 2 + this.values[index][1] ** 2;
            if (currentDis >= lagerDis) {
                break;
            }

            [this.values[index], this.values[lagerIndex]] = [
                this.values[lagerIndex],
                this.values[index],
            ];

            index = lagerIndex;
        }
    }
}
