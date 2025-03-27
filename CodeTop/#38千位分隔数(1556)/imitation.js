/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let res = '';
    let index = 0;
    while (n) {
        let a = n % 10;
        n = Math.floor(n / 10);
        res += a.toString();
        index++;
        if (index % 3 === 0) {
            res += ".";
        }
    }

    

    return res;
};

console.log(thousandSeparator(123456789));