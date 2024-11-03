/**
 * 计算数组中每个元素的出现频率
 * @param {Array} array - 输入的数组
 * @returns {Map} - 返回一个Map对象，键为数组元素，值为出现频率
 */
function getFrequency(array) {
    const result = new Map();
    for (let num of array) {
        if (result[num]) {
            result[num]++;
        }else {
            result[num] = 1;
        }
    }
    console.log("frequencyMap:", result);
    return result;
}

/**
 * 根据元素出现频率获取满足条件的元素集合
 * @param {Object} map - 频率Map对象，由getFrequency函数返回
 * @param {number} n - 频率阈值，只有出现频率大于等于n的元素会被包含在结果中
 * @returns {Array} - 返回满足条件的元素集合
 */
function getSetByFrequency(map, n) {
    const result = [];
    for (let num in map) {
        if (map[num] >= n) {
            result.push(Number(num)); // 将字符串转换为数字
        }
    }
    result.sort((a, b) => b - a); // 对数组进行排序
    console.log(n, "Set:", result);
    return result;
}

/**
 * 在两个集合中寻找满足特定条件的元素组合
 * @param {Array} arr3 - 第一个集合，通常包含出现频率至少为3的元素
 * @param {Array} arr2 - 第二个集合，通常包含出现频率至少为2的元素
 * @param {number} max - 最大值限制，元素组合的特定计算结果不能超过这个值
 * @returns {Array} - 返回满足条件的元素组合，如果没有找到则返回[0, 0]
 */
function findMax(arr3, arr2, max) {
    let result = [0, 0];
    let maxSum = 0;

    for (let num3 of arr3) {
        for (let num2 of arr2) {
            if (num3 === num2) {
                continue;
            }

            const sum = 3*num3 + 2*num2;
            if (sum <= max && sum > maxSum) {
                result = [num3, num2];
                maxSum = sum;
                console.log("maxArray:", result);
            }
        }
    }
    console.log(result)
    return result;
}

/**
 * 解决方案函数，根据元素出现频率和特定条件找出最佳元素组合
 * @param {number} n - 数组长度，表示输入数组中元素的数量
 * @param {number} max - 最大值限制，用于findMax函数
 * @param {Array} array - 输入的数组，包含n个元素
 * @returns {Array} - 返回最佳元素组合，如果没有找到则返回[0, 0]
 */
function solution(n, max, array) {
    const frequencyMap = getFrequency(array);
    const threeSet = getSetByFrequency(frequencyMap, 3);
    const twoSet = getSetByFrequency(frequencyMap, 2);
    if (threeSet.length ===0 || twoSet.length === 0) {
        return [0, 0];
    } else
        return findMax(threeSet, twoSet, max);
}

/**
 * 主函数，用于运行测试案例
 */
function main() {
    // Assess
    console.log(JSON.stringify(solution(9, 34, [6, 6, 6, 8, 8, 8, 5, 5, 1])) === JSON.stringify([8, 5]));
    console.log(JSON.stringify(solution(9, 37, [9, 9, 9, 9, 6, 6, 6, 6, 13])) === JSON.stringify([6, 9]));
    console.log(JSON.stringify(solution(9, 40, [1, 11, 13, 12, 7, 8, 11, 5, 6])) === JSON.stringify([0, 0]));
    // console.log(JSON.stringify(solution(9, 40, [1, 1, 1, 6, 6, 6, 11, 1, 6])) === JSON.stringify([1, 6]));
}

main();
