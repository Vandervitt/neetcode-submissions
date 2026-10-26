class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const minHeap = new MinHeap();

        for (const num of nums) {
            minHeap.push(num);
            if (minHeap.size > k) {
                minHeap.pop();
            }
        }

        return minHeap.peek()!;
    }
}

class MinHeap {
    private readonly values: number[] = [];

    get size() {
        return this.values.length;
    }

    peek(): number {
        return this.values[0];
    }

    push(val: number): void {
        this.values.push(val);
        this.shiftUp(this.size - 1);
    }

    pop(): number {
        const topValue = this.values[0];
        const lastValue = this.values.pop();

        if (this.size > 0) {
            this.values[0] = lastValue;
            this.shiftDown(0);
        }

        return topValue;
    }

    private shiftUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.values[parentIndex] <= this.values[index]) {
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
            const leftIndex = index * 2 + 1;
            const rightIndex = leftIndex + 1;

            if (leftIndex >= this.size) {
                break;
            }

            let smallerIndex = leftIndex;
            if (rightIndex < this.size && this.values[leftIndex] > this.values[rightIndex]) {
                smallerIndex = rightIndex;
            }

            if (this.values[index] <= this.values[smallerIndex]) {
                break;
            }

            [this.values[index], this.values[smallerIndex]] = [
                this.values[smallerIndex],
                this.values[index],
            ];

            index = smallerIndex;
        }
    }
}
