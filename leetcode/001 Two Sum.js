/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
   
  /**
   * APPROACH-1
   * 1. Iterate through the array from i=0 to i=n-1
   * 2. Nested loop from j=i+1 to j=n-1.
   * 3. if arr[i] + arr[j] === target, return the indices
   * Time Complexity: O(n^2)
   * Space Complexity: O(1)
   */
  
  /**
   * APPROACH-2
   * 1. Iterate through the array once, and keep storing the elements in a Set, along
        with it's index.
   * 2. Iterate through the array again, and while doing so, see whether,
        hashMap.has(target - arr[i]).
   * 3. If yes, return [i, hashMap.get(target - arr[i])]
   * Time Complexity: O(n)
   * Space Complexity: O(n)
  let hashMap = {};
  let result = [];
  for(let i=0; i<nums.length; i++) {
      hashMap[nums[i]] = i;
  }
  for(let i=0; i<nums.length; i++) {
      const numToFind = target-nums[i];
      if(hashMap.hasOwnProperty(numToFind) && hashMap[numToFind]!==i) {
          result.push(i, hashMap[numToFind]);
          break;
      }
  }
  return result;
  */

  /**
   * APPROACH-3
   * A slight modification over the last approach to solve the question in a single loop.
   */
  const hashMap = {};
  for(let i=0; i<nums.length; i++) {
      const diff = target - nums[i];
      if(hashMap.hasOwnProperty(diff)) {
          return [hashMap[diff], i];
      }
      hashMap[nums[i]] = i;
  }
};