class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>();

        for (const str of strs) {
            const key = str.split("").sort().join(",");

            const group = groups.get(key);
            if (group !== undefined) {
                group.push(str);
            } else {
                groups.set(key, [str]);
            }
        }

        return [...groups.values()];
    }
}
