/* 
邻居问题
n个房子，k个有人，希望入住在相邻都有人的房间。
输入n,k
输出最小可能以及最大可能

样例分析6 4
n=6, k=4
最大可能xoxoxx为2

输入
6 4

输出
0 2
*/

var n = 9;
var k = 5;
var ans = [];
ans[0] = 0;
if (n < 3 || n === k || k === 1) {
  ans[1] = 0;
} else {
  if ((n - k) === 1) {
    ans[1] = 1;
  } else {
    if (k > Math.ceil(n / 2)) {
      ans[1] = n - k;
    } else {
      ans[1] = k - 1;
    }
  }
}
console.log(ans[0]+" "+ans[1]);