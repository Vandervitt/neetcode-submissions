class TrieNode {
    readonly children = new Map<string, TrieNode>();
    isEnd = false;
}

class WordDictionary {
    private readonly root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let node = this.root;

        for (const char of word) {
            let child = node.children.get(char);

            if (child === undefined) {
                child = new TrieNode();
                node.children.set(char, child);
            }

            node = child;
        }

        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        function dfs(node: TrieNode, index: number): boolean {
            if (index === word.length) {
                return node.isEnd;
            }

            const char = word[index];

            if (char === ".") {
                for (const child of node.children.values()) {
                    if (dfs(child, index + 1)) {
                        return true;
                    }
                }

                return false;
            }

            const child = node.children.get(char);
            if (child === undefined) {
                return false;
            }

            return dfs(child, index + 1);
        }

        return dfs(this.root, 0);
    }
}
