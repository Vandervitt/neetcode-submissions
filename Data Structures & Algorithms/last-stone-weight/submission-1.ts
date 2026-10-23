class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        // 构建大顶堆
        const maxHeap: MaxHeap = new MaxHeap();
        for (const stone of stones) {
            maxHeap.push(stone);
        }

        // 每轮取出两个进行比较
        while (maxHeap.size > 1) {
            const heavier: number = maxHeap.pop();
            const lighter: number = maxHeap.pop();
            const diff = heavier - lighter;

            if (diff > 0) {
                maxHeap.push(diff);
            }
        }

        return maxHeap.peek() ?? 0;
    }
}

/** 数组大顶堆：父节点值不小于孩子，堆顶保存当前最大值。 */
export class MaxHeap {
    private readonly values: number[] = [];

    get size(): number {
        return this.values.length;
    }

    peek(): number | undefined {
        return this.values[0];
    }

    push(value: number): void {
        this.values.push(value);
        this.siftUp(this.size - 1);
    }

    pop(): number | undefined {
        if (this.size === 0) {
            return undefined;
        }

        const maxValue = this.values[0];
        const lastValue = this.values.pop()!;
        // 单节点弹出后已为空；其余情况用末尾补根，再恢复向下的大小关系。
        if (this.size > 0) {
            this.values[0] = lastValue;
            this.siftDown(0);
        }

        return maxValue;
    }

    private siftUp(index: number): void {
        // 只要尚未到根，就仍有父节点需要比较。
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.values[parentIndex] >= this.values[index]) {
                break;
            }

            [this.values[parentIndex], this.values[index]] = [
                this.values[index],
                this.values[parentIndex],
            ];

            index = parentIndex;
        }
    }

    private siftDown(index: number): void {
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = leftIndex + 1;

            // 最后一个有效下标是 size - 1，只有达到 size 才越界。
            if (leftIndex >= this.size) {
                break;
            }

            let largerChildIndex = leftIndex;
            if (rightIndex < this.size && this.values[rightIndex] >= this.values[leftIndex]) {
                largerChildIndex = rightIndex;
            }

            // 必须与较大孩子比较；只满足左孩子并不代表也满足右孩子。
            if (this.values[index] >= this.values[largerChildIndex]) {
                break;
            }

            [this.values[index], this.values[largerChildIndex]] = [
                this.values[largerChildIndex],
                this.values[index],
            ];

            index = largerChildIndex;
        }
    }
}
