/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	var arr=[];
    for(var i=0;i<numRows;i++){
    	arr[i]=[];
    	for(var j=0;j<=i;j++){
    		if(j===0 || j===i){
    			arr[i][j]=1;
    		}else{
    			arr[i][j]=arr[i-1][j-1]+arr[i-1][j];
    		}
    	}
    }
    return arr;
};

var numRows=5;
console.log(generate(numRows));

