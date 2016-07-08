/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var len=s.length;
	if(len<2 || len%2!==0) return false;
    var preset={};
    preset['[']=']';
    preset['{']='}';
    preset['(']=')';
    preset[')']='(';
    preset['}']='{';
    preset[']']='[';
    for(var i=0;i<len/2;i++){
    	if(!preset[s[i]]) return false;
    	if(s[i+1]===preset[s[i]]){
    		i++;
    	}else if(s[i+1]===preset[s[len-i-2]]){
    		i++;
    	}else{
    		return false
    	}
    	return true;
    }

};

var s='[]{}()'
console.log(isValid(s));
var s='['
console.log(isValid(s));
var s='([])'
console.log(isValid(s));