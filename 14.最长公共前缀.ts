/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let str = ''
  if (!strs.length) return str
  const first = strs[0]
  if (strs.length === 1) return first
  for (let index = 0; index < first.length; index++) {
    const element = first[index]
    for (let j = 1; j < strs.length; j++) {
      const strItem = strs[j];
      if (strItem[index] !== element) {
        return str
      }
    }
    str += element
  }
  return str
};
// @lc code=end

console.log(longestCommonPrefix(["flower","flower","flower","flower"]))
