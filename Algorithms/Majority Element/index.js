/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var obj={};
    var len=nums.length,
        halfLen=len/2;
    for(var i=0;i<len;i++){
        var item=nums[i];
        if(!obj[item]){
            obj[item]=1
        }else{
            obj[item]++
        }
        if(obj[item]>halfLen){
            return item;
        }
    }
};
var nums=[1,2,3,4,5];
console.log(majorityElement(nums));
var nums=[3,3,3,4,5];
console.log(majorityElement(nums));