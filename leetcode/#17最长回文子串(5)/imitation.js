/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const l = s.length;
    let res = '';
    if(l < 2) return s;
    for(let i = 0; i < l; i++) {
        helper(i ,i);
        helper(i, i + 1);
    }

    function helper(m, n) {
        while(m >= 0 && n < l && s[m] === s[n]) {
            m--;
            n++;
        }
        if(n - m - 1 > res.length) {
            res = s.slice(m + 1, n);
        }
    }

    return res;
};