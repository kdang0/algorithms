const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [5,1,4,4,1,1,5,5]
const expected6 = [];


//  - order doesn't matter

/*
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
  let dictionary = {};
  let counter = 1;
  let array = [];
  for (let i =0; i < nums.length ; i ++){
    if (nums[i] in dictionary) {
     dictionary[nums[i]] ++;
    }
    else {
     dictionary[nums[i]] = 1;
    }
    if(dictionary[nums[i]] > counter){
        counter = dictionary[nums[i]];
    }
  }

  for (i in dictionary) {
    if (dictionary[i] === counter) { 
      array.push(parseInt(i));
    } 
  }

  if(array.length === (nums.length / counter)){
    array = [];
  }
 
  return array;
}
console.log(mode(nums5))