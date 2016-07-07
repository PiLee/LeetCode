/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if(strs.length===0) return "";
	var prefix=strs[0];
	for(var i=1,len=strs.length;i<len;i++){
		prefix=campare(strs[i],prefix);
	}
	function campare(item,prefix){
		var cache="";
		for(var j=0,plen=prefix.length;j<plen;j++){
			if(item[j]===prefix[j]){
				cache+=item[j];
			}else{
				return cache;
			}
		}
		return cache;
	}

	return prefix;
};

var strs=['pileegaga','pileexsxada','apilees1xsxada'];
console.log(longestCommonPrefix(strs));