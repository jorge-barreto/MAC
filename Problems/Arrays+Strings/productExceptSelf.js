/**
 * Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
 * 
 * Example:
 * 
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
 * 
 * Note: Please solve it without division and in O(n).
 * 
 * Follow up:
 * Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
 * 
 * 
 */

function productExceptSelf(nums) {
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    let multiplicand = output[i-1] === undefined
      ? 1 : output[i-1];
    output.push(multiplicand * nums[i]);
    // in this first pass, output will contain the left products up to i
  }

  let right = 1;

  for (let i = nums.length - 1; i > 0; i--) {
    output[i] = right * output[i-1];
    right *= nums[i];
  }

  output[0] = right;

  return output;
}

productExceptSelf([0,1,2,3,4,0])