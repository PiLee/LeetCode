/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var v1=version1.split('.'),
        v2=version2.split('.');
    var len=Math.max(v1.length,v2.length);
     for(var i=0;i<len;i++){
     	var item1 = v1[i] || 0;
     	var item2 = v2[i] || 0;
       if(parseInt(item1)>parseInt(item2)) return 1;
       if(parseInt(item1)<parseInt(item2)) return -1;
     }
     return 0;
};


var version1='1.3.4';
var version2='1.3';
console.log(compareVersion(version1,version2));