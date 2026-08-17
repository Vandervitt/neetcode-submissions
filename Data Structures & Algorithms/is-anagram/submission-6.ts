class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
        return false;
    }

    const counts = new Array<number>(26).fill(0);
    const aCode = 'a'.charCodeAt(0);

    for (const char of s){
        const slot = char.charCodeAt(0) - aCode;
        counts[slot]++;
    }

    for (const char of t){
        const slot = char.charCodeAt(0) - aCode;
        if(--counts[slot] < 0){
            return false;
        }
    }

    return true;
    }
}
