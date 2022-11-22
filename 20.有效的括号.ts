/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * 遍历判断stack是否存在类型 如果存在删除，不存在添加
 * 如果stack数组有值，则false
 */
function isValid_v1(s: string): boolean {
  let stack: any = []
  const map: any = {
    ")": "(",
    "]": "[",
    "}": "{",
  }
  for (let index = 0; index < s.length; index++) {
    const leftBracket = s[index]
    const rightBracket = map[leftBracket]
    if (rightBracket) {
      if (!stack.length || stack[stack.length - 1] !== rightBracket) {
        return false
      }
      stack.pop()
    }  else {
      stack.push(leftBracket)
    }
  }
  return !stack.length
};

function isValid(s: string): boolean {
  let stack: any = []
  const map: any = {
    "(": ")",
    "[": "]",
    "{": "}",
  }
  for (let index = 0; index < s.length; index++) {
    const leftBracket = s[index]
    const rightBracket = map[leftBracket]
    if (rightBracket) {
      stack.push(rightBracket)
    } else {
      if (stack.pop() !== leftBracket) return false
    }
  }
  return !stack.length
};
// @lc code=end

console.log(isValid('(())[]{}'))
