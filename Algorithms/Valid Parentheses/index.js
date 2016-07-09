/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var len=s.length;
    var preset={};
    var cache=[];
    preset['[']=']';
    preset['{']='}';
    preset['(']=')';
    if(len<2 || len%2!==0 || !preset[s[0]]) return false;
    for(var i=0;i<len;i++){
        var curItem=s[i];
        if(cache.length===0){
            cache.push(curItem)
        }else{
            if(curItem === preset[cache[cache.length-1]]){
                cache.pop();
            }else{
                cache.push(curItem);
            }
        }
    }
    if(cache.length===0){
        return true
    }else{
        return false;
    }

};

var s='[]{}()'
console.log(isValid(s));
var s='['
console.log(isValid(s));
var s='(('
console.log(isValid(s));
var s='([])'
console.log(isValid(s));
var s='([(){}]{})'
console.log(isValid(s));