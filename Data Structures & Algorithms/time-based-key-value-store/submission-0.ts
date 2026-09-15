class TimeMap {
    private readonly keyStore: Map<string, Array<{ value: string; timestamp: number }>>;

    constructor() {
        this.keyStore = new Map<string, Array<{ value: string; timestamp: number }>>();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        const valueArr = this.keyStore.get(key)!;
        valueArr.push({
            value,
            timestamp,
        });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if (!this.keyStore.has(key)) {
            return "";
        }
        const valueArr = this.keyStore.get(key)!;
        let left = 0;
        let right = valueArr.length - 1;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            const currentStamp = valueArr[mid].timestamp;
            if (currentStamp === timestamp) {
                return valueArr[mid].value;
            }
            if (currentStamp > timestamp) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        if (right >= 0) {
            return valueArr[right].value;
        }

        return "";
    }
}
