/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var _s=s.replace(/\W/g,"").toLowerCase();
    for(var i=0,len=_s.length;i<len/2;i++){
    	if(_s[i]!==_s[len-i-1]){
    		return false
    	}
    }
    return true;   
};

var s="abcba";
console.log(isPalindrome(s));