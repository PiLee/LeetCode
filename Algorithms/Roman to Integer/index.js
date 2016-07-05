/**
 * @param {string} s
 * @return {number}
 */

//Ⅰ（1）、X（10）、C（100）、M（1000）、V（5）、L（50）、D（500）
var romanToInt = function(s) {
    var map={};
    map['I']=1;
    map['X']=10;
    map['C']=100;
    map['M']=1000;
    map['V']=5;
    map['L']=50;
    map['D']=500;
    var result=0;
    for(var i=0,len=s.length;i<len;i++){
    	var item = map[s[i]];
    	var nextItem = s[i+1]!==undefined?map[s[i+1]]:0;
    	if(item < nextItem){
    		result-=item;
    	}else{
    		result+=item
    	}
    }
    return result;
};

console.log(romanToInt('VII'));
console.log(romanToInt('DCXXI'));
