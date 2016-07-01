/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	var min = - (1 << 30) * 2;
  	var max = (1 << 30) * 2 - 1;
	var result = parseInt(str);
	if(isNaN(result)) return 0;
	if(result < min) return min;
	if(result > max) return max;
    return result;
};

console.log(myAtoi('123'));
console.log(myAtoi('2147483648'));
console.log(myAtoi('women123'));
