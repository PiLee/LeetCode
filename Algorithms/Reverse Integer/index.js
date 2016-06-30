/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	var min = - (1 << 30) * 2;
  	var max = (1 << 30) * 2 - 1;
	var s=x.toString();
	var temp="";
	var i=s.length-1;
	while(i>=0){
		temp+=s[i];
		i--;
	}
	var result=parseInt(temp);
	if(result > max || result < min){
		return 0;
	}
	if(x<0){
		return -result;
	}
	return result;
};

var num=1534236469;
console.log(reverse(num));

var num2=-123;
console.log(reverse(num2));

var num3=4323;
console.log(reverse(num3));