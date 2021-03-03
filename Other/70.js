// 70-爬楼梯（easy）

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶

/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
// 本问题其实常规解法可以分成多个子问题，爬第n阶楼梯的方法数量，等于 2 部分之和

// 爬上 n-1n−1 阶楼梯的方法数量。因为再爬1阶就能到第n阶
// 爬上 n-2n−2 阶楼梯的方法数量，因为再爬2阶就能到第n阶

// dp[n] = dp[n-1] + dp[n-2]
// 且dp[0] = 1; dp[1] = 1
var climbStairs = function(n) {
  const dp = [];
  dp[0] = 1, dp[1] = 1;
  for(let i = 2; i <=n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
};

// 用变量存储
var climbStairs = function(n) {
  let p = 0, q = 0, r = 1
  for(let i = 1; i<= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r
}

// 字节改动题
// 2020-9-6 字节跳动笔试题第一题就是这个题目。 
// 但是题目做了修改（限制条件做了修改，加了第二个限制条件）： 
// 1、每次你可以爬 1 或 2 个台阶。 
// 2、不能连续跳两个台阶。（个人理解为这次跳了两个台阶，下次不能再跳两个台阶）

// 解题思路：
// f(x) 表示爬到第 x 级台阶的方案数， 
// g(x, 1) 表示爬到第 x 级台阶并且最后一步只跨越一个台阶的方案数， 
// g(x, 2) 表示爬到第 x 级台阶并且最后一步跨越了两个台阶的方案数。

// 则有： f(x) = g(x, 1)+g(x,2)， 
// g(x, 1) = f(x-1)， g(x, 2) = g(x-2, 1) = f(x-3) // 最后一步跨越了两步，那么上一步只能跨越一步

// 最终得到一下方程式：
// f(x) = g(x, 1) + g(x, 2) = f(x-1)+ f(x-3)

// 思维上理解：
// 即一旦跳了两个台阶，则下一步只能跳一步（2->1），把它们连在一起就一共跳了三个台阶，
// 所以问题可以转化为要么跳一个台阶，要么跳三个台阶（当然还是有点区别的，只不过因为结果是一样的，所以可以这么转化），
// 于是就有了 f(x) = f(x-1) + f(x-3)
var climbStairs = function(n) {
  const dp = [];
  dp[0] = 1, dp[1] = 1, dp[2] = 2;
  for(let i = 3; i <=n; i++) {
    dp[i] = dp[i-1] + dp[i-3]
  }
  return dp[n]
}

console.log(climbStairs(3))