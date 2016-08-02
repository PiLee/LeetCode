/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex<=0) return [1];
    var arr=[];
    for(var i=0;i<rowIndex+1;i++){
        arr[i]=[];
        for(var j=0;j<=i;j++){
            if(j===0 || j===i){
                arr[i][j]=1;
            }else{
                arr[i][j]=arr[i-1][j-1]+arr[i-1][j];
            }
        }
    }
    return arr[rowIndex];
};


var rowIndex=10;
console.log(getRow(rowIndex));

