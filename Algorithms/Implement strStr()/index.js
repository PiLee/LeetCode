/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */



/*var strStr = function(haystack, needle) {
	var haystackLen=haystack.length,
		needleLen=needle.length;
	if(needleLen===0) return 0;
	if(haystackLen<needleLen) return -1;
	var result;
    for(var i=0;i<haystackLen;i++){
    	result=i;
    	for(var j=0;j<needleLen;j++){
    		if(needle[j]!==haystack[i+j]){
    			break;
    		}
    		if(j===needleLen-1){
    			return i;
    		}
    	}
    }
    return -1;
};*/

var strStr = function(haystack, needle) {
	return haystack.search(needle)
};



var haystack="pilee";
var needle = "lee";
console.log(strStr(haystack,needle));

// 醉啦，之前写了那么辛苦还Time Limit Exceeded，才发现search就可以搞定 T_T