/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var aLen=a.length,bLen=b.length,result="",tmp=0,flag=0;
    var length=(aLen>bLen)?aLen:bLen;
    for(var i=0;i<length;i++){
		var aItem = parseInt(a[aLen-i-1] || 0);
        var bItem = parseInt(b[bLen-i-1] || 0);
        tmp=aItem+bItem+flag;
        result=tmp%2+result;
        flag=parseInt(tmp/2);
    }
    if(flag===1){result='1'+result}
    return result;
}

var a='11',b='1'
console.log(addBinary(a,b))