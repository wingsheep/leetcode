/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  const n = nums.length
  if (n === 0) return 0
  let fast = 1, slow = 1
  while (fast < n) {
    if (nums[fast] !== nums[fast -1]) {
      nums[slow] = nums[fast]
      ++slow
    }
    ++fast
  }
  return slow
}
// @lc code=end

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
