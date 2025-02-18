/**
 * 计算给定数组中股票的最大利润
 * 
 * 遍历数组，对于每一天的股票价格，计算如果在当天卖出股票所能获得的利润，
 * 并更新至今的最小买入价格，以确保最大利润被正确计算
 * 
 * @param {number[]} prices - 一个包含每日股票价格的数组
 * @returns {number} 返回最大利润
 */
const maxProfit = function(prices) {
  // 初始化最大利润为0
  let ans = 0;
  // 初始化最小买入价格为数组中的第一个元素
  let minPrice = prices[0];
  // 遍历价格数组
  for (const p of prices) {
    // 更新最大利润，当前价格与最小买入价格之差与已知最大利润比较
    ans = Math.max(ans, p - minPrice);
    // 更新最小买入价格，取当前价格与已知最小买入价格的较小者
    minPrice = Math.min(minPrice, p);
  }
  // 返回计算出的最大利润
  return ans;
};
