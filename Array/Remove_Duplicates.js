/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let insertIndex = 1;
    for(let i = 1; i < nums.length; i++){
        // We skip to next index if we see a duplicate element
        if(nums[i - 1] != nums[i]){  
            /* Storing the unique element at insertIndex index and incrementing
               the insertIndex by 1 */
            nums[insertIndex] = nums[i];  
            insertIndex++; 
        }
    }
    return insertIndex;
};

console.log(removeDuplicates([1,1,2])) // 1 2
console.log(removeDuplicates( [0,0,1,1,1,2,2,3,3,4])) // 0 1 2 3 4