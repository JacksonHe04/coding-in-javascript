/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(strs[i]);
    }
    const result = [];
    for (let value of map.values()) {
        result.push(value);
    }
    return result;
};

function main() {
    console.log(JSON.stringify(groupAnagrams(["eat","tea","tan","ate","nat","bat"])));
    console.log(JSON.stringify(groupAnagrams(["a"])));
}

main();