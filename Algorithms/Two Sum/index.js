/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var item1,item2,len=nums.length;
    for(var i=0;i<len;i++){
        item1=nums[i];
        for(var j=i+1;j<len;j++){
            item2=nums[j];
            if((item1+item2)===target) return[i,j];
        }
    }
};
var nums=[3,2,4];
var target=6;
console.log(twoSum(nums,target));