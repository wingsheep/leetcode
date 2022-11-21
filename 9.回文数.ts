/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  return x.toString().split('').reverse().join('') === x.toString()
};
// @lc code=end

