/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if(numRows===1){
		return s;
	}
	var len=s.length,
		diff = 2*numRows-2,
		result="";
	for(var i=0;i<numRows;i++){
		for(var j=i;j<len;j+=diff){
			result+=s[j];
			if(i!==0 && i!==(numRows-1)){
				var temp=j+diff-2*i;
				if(temp<len){
					result+=s[temp];
				}
			}
		}
	}
	return result;
};

console.log(convert("PAYPALISHIRING", 3))