/**
 * 比较两个版本号 version1 和 version2。
 * 版本号由一个或多个修订号组成，各修订号由一个 '.' 分隔。每个修订号默认是从 0 开始的整数。
 * 比较规则：
 * - 如果 version1 > version2 返回 1
 * - 如果 version1 < version2 返回 -1
 * - 如果 version1 == version2 返回 0
 * 
 * @param {string} version1 - 第一个版本号字符串
 * @param {string} version2 - 第二个版本号字符串
 * @returns {number} - 返回 1, -1 或 0 表示版本号比较结果
 */
function compareVersion(version1, version2) {
  // 将版本号按 '.' 分割成数组
  const v1 = version1.split('.');
  const v2 = version2.split('.');

  // 遍历两个版本号数组的最大长度
  for (let i = 0; i < v1.length || i < v2.length; ++i) {
    // 初始化当前位的修订号，默认为 0
    let x = 0, y = 0;

    // 如果当前位在 v1 中存在，则解析为整数
    if (i < v1.length) {
      x = parseInt(v1[i], 10);
    }

    // 如果当前位在 v2 中存在，则解析为整数
    if (i < v2.length) {
      y = parseInt(v2[i], 10);
    }

    // 比较当前位的修订号
    if (x > y) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
  }

  // 如果所有位都相等，则返回 0
  return 0;
}
