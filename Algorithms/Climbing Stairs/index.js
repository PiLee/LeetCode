/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var twoLength=parseInt(n/2)+1;
    var x;
    var ways=1;

    for(var i=1;i<twoLength;i++){
    	x=n-2*i;
    	var m=Math.max(i,x);
    	ways+=factorial(x+i)/(factorial(x+i-m)*factorial(m));
    }
    return ways;
};
function factorial(num){  
    if(num <= 0){  
        return 1;  
    }else{  
        return num*arguments.callee(num-1);  
    }  
}  
var n=5;
console.log(climbStairs(n));