/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (map[diff] !== undefined) {
      return [map[diff], i];
    }
    map[num] = i;
  }
  return [];
};
// @lc code=end


// {2: 0}
// {2: 0, 11: 1}
