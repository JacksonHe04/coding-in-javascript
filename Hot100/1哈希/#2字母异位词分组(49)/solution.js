/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const map = new Map();
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
}

// 测试
function main() {
    console.log(JSON.stringify(groupAnagrams(["eat","tea","tan","ate","nat","bat"])));
    console.log(JSON.stringify(groupAnagrams(["a"])));
}

main();