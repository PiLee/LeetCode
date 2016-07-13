/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(var i=0,len=nums.length;i<len;i++){
    	if(nums[i]===val){
    		nums.splice(i,1);
    		i--;
    	}
    }
    return nums.length;
};


var nums=[1,2,3,4,4,4,5];
var val=4;
console.log(removeElement(nums,val));