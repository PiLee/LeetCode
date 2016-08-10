/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
   	var len=s.length,
	   	base='A'.charCodeAt()-1,
	   	result=0;
    for(var i=0;i<len;i++){
    	var code=s[i].charCodeAt();
    	result+=Math.pow(26,len-i-1)*(code-base);
    }
    return result;
};

var s='BAB'
console.log(titleToNumber(s))