/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	if(x<0) return false;
	var s=x.toString();
	var len=s.length;
    if(len === 1) return true;
    if(len%2===0){
    	for(var i = 0; i < len/2; i++){
			if(s.charAt(i)!==s.charAt(len-i-1)){
				return false;
			}
    	}
    	return true;
    }else{
    	for(var i = 0; i < len/2-1; i++){
			if(s.charAt(i)!==s.charAt(len-i-1)){
				return false;
			}
		}
    	return true;
    }
};


var num=123;
console.log(isPalindrome(num));
var num=12321;
console.log(isPalindrome(num));
var num=123321;
console.log(isPalindrome(num));
var num=-123321;
console.log(isPalindrome(num));
var num=123748921;
console.log(isPalindrome(num));