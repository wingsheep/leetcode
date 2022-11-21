/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

function romanToInt_v1(s: string): number {
  const map: any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let n = 0
  let nextElement = ''
  for (let index = s.length - 1; index >= 0; index--) {
    const element = s[index]
    nextElement = s[index + 1]
    if (element === 'I' && (nextElement === 'V' || nextElement === 'X')) {
      n = n - 1
      continue
    }
    if (element === 'X' && (nextElement === 'L' || nextElement === 'C')) {
      n = n - 10
      continue
    }
    if (element === 'C' && (nextElement === 'D' || nextElement === 'M')) {
      n = n - 100
      continue
    }
    n = n + map[element]
  }
  return n
};
// @lc code=start

function romanToInt(s: string): number {
  const map: any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: -1,
    IX: -1,
    XL: -10,
    XC: -10,
    CD: -100,
    CM: -100
  }
  let n = 0
  let nextElement = ''
  for (let index = s.length - 1; index >= 0; index--) {
    const element = s[index]
    nextElement = s[index + 1]
    if (map[element+nextElement]) {
      n = n + map[element+nextElement]
      continue
    }
    n = n + map[element]
  }
  return n
};
// @lc code=end

romanToInt('MCMXCIV')
