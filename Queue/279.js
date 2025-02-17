// 279. 完全平方数
// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。
// 你需要让组成和的完全平方数的个数最少。

// 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

//  
// 示例 1：

// 输入：n = 12
// 输出：3 
// 解释：12 = 4 + 4 + 4
// 示例 2：

// 输入：n = 13
// 输出：2
// 解释：13 = 4 + 9

/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
 var numSquares = function(n) {
  let dp = [...Array(n+1)].map(_ => 0)
  for (let i = 1; i <= n; i++) {
    dp[i] = i
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }
  return dp[n]
 }

 // BFS
 var numSquares = function(n) {
  // const isSquar = function(n) {
  //   let sq = Math.sqrt(n) ^ 0
  //   return sq === Math.sqrt(n)
  // }
  let queue = new Set(), sqrts = [], count = 0;
  for (let i = 1; i * i <= n; i++) {
    sqrts.push(i * i)
  }
  queue.add(0)
  while(queue.size) {
    let nextSet = new Set()
    count++
    for (let q of queue) {
      for (let s of sqrts) {
        let add = q + s;
        if (add === n) {
          return count
        }
        if (add > n) {
          break
        }
        nextSet.add(add)
      }
    }
    queue = nextSet
    
    
  }
  return count

};