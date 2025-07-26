/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    // 将数字n转换为字符串，并在适当的位置添加千位分隔符
    return (n + '').replace(/(?!^)(?=(\d{3})+$)/g, '.')
};