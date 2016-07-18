/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n<=1) return "1";
    var round=0;
    var str="1";
    var result="";
    str+=str[0]+str[0];
	while(round<n){
		var count=1;
		for(var i=1;i<str.length;i++){
			if(str[i]===str[i+1]){
				count++;
				str+=count+str[i];
			}else{
				str+=result;
				count=1;
			}
		}
		round++;
	}
	return str;
};

var n=3;
console.log(countAndSay(n));