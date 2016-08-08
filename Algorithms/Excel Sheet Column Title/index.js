/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
	var base='A'.charCodeAt(),
		result="";
	while(n>0){
        result = String.fromCharCode((n-1)%26+base) + result;
        n = parseInt((n-1)/26);
    }
	return result;
};

var n=305
console.log(convertToTitle(n))