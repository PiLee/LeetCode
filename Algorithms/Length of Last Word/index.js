/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length===0) return 0;
    s=s.replace(/(\s*$)/g, "");
    var _s=s.split(" ");
    var last=_s[_s.length-1];
    return last.length;
};

var s="hello PiLee "
console.log(lengthOfLastWord(s));