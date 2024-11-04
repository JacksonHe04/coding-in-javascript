/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const map = new Map;
    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split('').sort().join('');
        if(!map.has(sortedStr)) {
            map[strs[i]] = sortedStr;
        }
    }

    // 遍历map
    const newMap = new Map;
    for (let key in map) {
        if (newMap.has(map[key])) {
            newMap.get(map[key]).push(key);
        } else {
            const arr3 = [key];
            newMap.set(map[key], arr3);
        }
    }

    const result = [];
    for (let value of newMap.values()) {
        result.push(value);
    }
    return result;
};

// 测试用例
function main() {
    console.log(JSON.stringify(groupAnagrams(["eat","tea","tan","ate","nat","bat"])));
    console.log(JSON.stringify(groupAnagrams(["a"])));
}

main();