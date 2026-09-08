class MinStack {
    private valueStack: number[];
    private minStack: number[];
    
    constructor() {
        this.valueStack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.valueStack.push(val);

        if(this.minStack.length === 0){
            this.minStack.push(val);
        } else {
            const currentMin = this.minStack[this.minStack.length - 1];
            this.minStack.push(Math.min(val, currentMin));
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.valueStack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.valueStack[this.valueStack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
