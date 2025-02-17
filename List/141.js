// 141-环形链表（easy）

// 给定一个链表，判断链表中是否有环。

// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

// 如果链表中存在环，则返回 true 。 否则，返回 false 。


// 进阶：

// 你能用 O(1)（即，常量）内存解决此问题吗？

// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。

// 输入：head = [1,2], pos = 0
// 输出：true
// 解释：链表中有一个环，其尾部连接到第一个节点。

// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  // JSON.stringify当在循环引用时会抛出异常TypeError ("cyclic object value")（循环对象值）
  try {
    JSON.stringify(head)
    return false
  } catch {
    return true
  }

};

// 
var hasCycle = function(head) {
  let fast = head;
  let slow = head;
  while(fast) {
    if (fast.next == null) return false
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true
  }
  return false
}