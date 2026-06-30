class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // Use a Map to group strings by their sorted keys
        const strMap = new Map<string, string[]>();

        for (const str of strs) {
            // Generate a unique key for the anagrem group
            const key = str.split("").sort().join("");

            // If the key does not exist, initialize an empty array
            if (!strMap.has(key)) {
                strMap.set(key, []);
            }

            // Push the current string into its corresponding group
            strMap.get(key)!.push(str);
        }

        return [...strMap.values()];
    }
}
