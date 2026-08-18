class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>();

        for(const str of strs) {
            const key = Solution.generateKey(str);

            let group = groups.get(key);
            if(group === undefined){
                group = [];
            }
            group.push(str);
            groups.set(key, group);
        }

        return [...groups.values()]
    }

    static generateKey(str:string):string {
        const counts = new Array(26).fill(0);
        const aCode = 'a'.charCodeAt(0);

        for(const s of str) {
            const slot = s.charCodeAt(0) - aCode;
            counts[slot]++;
        }

        return counts.join(',');
    }
}
