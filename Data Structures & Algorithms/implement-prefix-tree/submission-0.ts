class TrieNode {
    readonly children = new Map<string, TrieNode>();
    isEnd = false;
}

class PrefixTree {
    private readonly root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let node = this.root;

        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }

            node = node.children.get(char);
        }

        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        const node = this.findNode(word);

        return node !== null && node.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        return this.findNode(prefix) !== null;
    }

    findNode(text) {
        let node = this.root;

        for (const char of text) {
            const child = node.children.get(char);
            if (child === undefined) {
                return null;
            }

            node = child;
        }

        return node;
    }
}
