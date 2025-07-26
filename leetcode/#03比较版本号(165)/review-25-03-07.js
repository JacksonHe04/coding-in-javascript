/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split(".");
    const v2 = version2.split(".");
    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        x = v1[i]? parseInt(v1[i], 10): 0;
        y = v2[i]? parseInt(v2[i], 10): 0;
        if (x > y) return 1;
        if (x < y) return -1;
    }
    return 0;
};