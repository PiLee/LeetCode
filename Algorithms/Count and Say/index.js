/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n<=1) return "1";
    var round=0;
    var str="1";
	while(++round<n){
        str=solution(str);
	}
	return str;
};

function solution(str){
    var count=1;
    var result="";
    if(str.length!==1){
    	for(var i=0;i<str.length;i++){
    		if(str[i]===str[i+1]){
    			count++;
    		}else{
    			result+=count+str[i];
    			count=1;
    		}
    	}
    }else{
        result=count+str[0];
    }
	return result;
}

var n=6;
console.log(countAndSay(n));