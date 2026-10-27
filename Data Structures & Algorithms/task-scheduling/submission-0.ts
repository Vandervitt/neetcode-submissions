class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        const counts = new Map<string, number>();
        for (const task of tasks) {
            counts.set(task, (counts.get(task) ?? 0) + 1);
        }

        const avaliable = new BinaryHeap<Task>((a, b) => b.remaining - a.remaining);

        for (const [name, remaining] of counts) {
            avaliable.push({ name, remaining });
        }

        const cooling: CoolingTask[] = [];
        let head = 0;
        let time = 0;

        while (avaliable.size > 0 || head < cooling.length) {
            time++;

            while (head < cooling.length && cooling[head].readyAt <= time) {
                avaliable.push(cooling[head].task);
                head++;
            }

            const task = avaliable.pop();

            if (task === undefined) {
                continue;
            }

            task.remaining--;

            if (task.remaining > 0) {
                cooling.push({
                    task,
                    readyAt: time + n + 1,
                });
            }
        }

        return time;
    }
}

type Task = {
    name: string;
    remaining: number;
};

type CoolingTask = {
    task: Task;
    readyAt: number;
};

/** 比较器返回负数时，a 比 b 更优先；父节点的优先级始终不低于孩子。 */
export class BinaryHeap<T> {
    private readonly values: T[] = [];
    private readonly compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this.compare = compare;
    }

    get size(): number {
        return this.values.length;
    }

    peek(): T | undefined {
        return this.values[0];
    }

    push(value: T): void {
        this.values.push(value);
        this.siftUp(this.size - 1);
    }

    pop(): T | undefined {
        if (this.size === 0) return undefined;

        const topValue = this.values[0];
        // size 已确认非零；断言只消除空数组 pop 的类型分支。
        const lastValue = this.values.pop()!;
        if (this.size > 0) {
            this.values[0] = lastValue;
            this.siftDown(0);
        }
        return topValue;
    }

    private siftUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            // 当前元素没有更高优先级时，这条父子关系已满足堆序。
            if (this.compare(this.values[index], this.values[parentIndex]) >= 0) break;

            [this.values[index], this.values[parentIndex]] = [
                this.values[parentIndex],
                this.values[index],
            ];
            index = parentIndex;
        }
    }

    private siftDown(index: number): void {
        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = leftIndex + 1;
            if (leftIndex >= this.size) break;

            // 必须选更优先的孩子；否则交换后仍可能不满足另一个孩子的优先级。
            let preferredChildIndex = leftIndex;
            if (
                rightIndex < this.size &&
                this.compare(this.values[rightIndex], this.values[leftIndex]) < 0
            ) {
                preferredChildIndex = rightIndex;
            }

            if (this.compare(this.values[preferredChildIndex], this.values[index]) >= 0) break;

            [this.values[index], this.values[preferredChildIndex]] = [
                this.values[preferredChildIndex],
                this.values[index],
            ];
            index = preferredChildIndex;
        }
    }
}
