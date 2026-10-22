class MinHeap {
    private readonly values: number[] = [];

    get size(): number {
        return this.values.length;
    }

    peek(): number | undefined {
        return this.values[0];
    }

    push(val: number): void {
        this.values.push(val);
        // 然后维护堆的性质，上浮
        this.siftUp(this.values.length - 1);
    }

    pop(): number | undefined {
        if (this.size === 0) {
            return undefined;
        }

        const mininum = this.values[0];
        const lastVal = this.values.pop();

        if (this.size > 0) {
            this.values[0] = lastVal;
            this.siftDown(0);
        }

        return mininum;
    }

    private siftUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.values[parentIndex] <= this.values[index]) {
                break;
            }

            // 交换
            [this.values[parentIndex], this.values[index]] = [
                this.values[index],
                this.values[parentIndex],
            ];

            index = parentIndex;
        }
    }

    private siftDown(index: number): void {
        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = leftIndex + 1;

            if (leftIndex >= this.size) {
                break;
            }

            let smallerChildIndex = leftIndex;
            if (rightIndex < this.size && this.values[rightIndex] < this.values[leftIndex]) {
                smallerChildIndex = rightIndex;
            }

            if (this.values[index] <= this.values[smallerChildIndex]) {
                break;
            }

            [this.values[index], this.values[smallerChildIndex]] = [
                this.values[smallerChildIndex],
                this.values[index],
            ];

            index = smallerChildIndex;
        }
    }
}

class KthLargest {
    private readonly k: number;
    private readonly minHeap: MinHeap;

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.minHeap = new MinHeap();

        for (const value of nums) {
            this.add(value);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.minHeap.push(val);

        if (this.minHeap.size > this.k) {
            this.minHeap.pop();
        }

        return this.minHeap.peek();
    }
}
