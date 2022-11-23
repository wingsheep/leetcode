/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  const n = nums.length
  if (n === 0) return 0
  let right = 0, left = 0
  while (right < n) {
     if (nums[right] !== val) {
        nums[left] = nums[right]
        ++right
        ++left
     } else {
       ++right
     }
  }
  return left
};
// @lc code=end

