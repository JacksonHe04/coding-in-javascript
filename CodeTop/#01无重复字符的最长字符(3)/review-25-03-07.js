/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const l = s.length;
    let set = new Set();
    let ans = 0, j = 0;
    for (let i = 0; i < l; i++) {
        if (i !== 0) set.delete(s.charAt(i - 1));
        while (j < l && !set.has(s.charAt(j))) {
            set.add(s.charAt(j++));
        }
        ans = Math.max(ans, j - i);
    }
    return ans;
};