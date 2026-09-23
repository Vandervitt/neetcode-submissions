class ListNode {
  key: number | undefined;
  val: number | undefined;
  next: ListNode | null = null;
  prev: ListNode | null = null;

  constructor(key?: number, val?: number) {
    this.key = key;
    this.val = val;
  }
}

/** 使用 Map 定位节点，用双向链表维护从最久未使用到最近使用的顺序。 */
export class LRUCache {
  private readonly capacity: number;
  private readonly nodeMap = new Map<number, ListNode>();
  private readonly head = new ListNode();
  private readonly tail = new ListNode();

  constructor(capacity: number) {
    this.capacity = capacity;
    // 两个哨兵本身不存数据；head.next 和 tail.prev 分别标记使用顺序的两端。
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  private removeLeastRecentlyUsedNode(): void {
    // 只在新增节点导致超容量后调用，因此 head.next 必定是真实节点。
    const leastRecentlyUsedNode = this.head.next!;
    const nextNode = leastRecentlyUsedNode.next!;

    this.head.next = nextNode;
    nextNode.prev = this.head;

    // 链表和 Map 必须同步淘汰，否则 get 仍能查到这个已移除的节点。
    this.nodeMap.delete(leastRecentlyUsedNode.key!);
  }

  private appendNodeToTail(node: ListNode): void {
    // 新节点还没有前驱与后继，不需要从旧位置断开。
    const previousMostRecentNode = this.tail.prev!;
    previousMostRecentNode.next = node;
    node.prev = previousMostRecentNode;
    node.next = this.tail;
    this.tail.prev = node;
  }

  private markAsRecentlyUsed(node: ListNode): void {
    // 只有已在链表中的节点才能移动：先接通它原位置的前驱与后继。
    const previousNode = node.prev!;
    const nextNode = node.next!;
    previousNode.next = nextNode;
    nextNode.prev = previousNode;

    // 再放到 tail 前面；即使 node 原本已经是最近使用节点，也保持连接正确。
    this.appendNodeToTail(node);
  }

  get(key: number): number {
    const node = this.nodeMap.get(key);
    if (node === undefined) {
      return -1;
    }

    // 成功读取也是一次使用，返回值之前先更新使用顺序。
    this.markAsRecentlyUsed(node);
    return node.val!;
  }

  put(key: number, value: number): void {
    const existingNode = this.nodeMap.get(key);
    if (existingNode !== undefined) {
      // 更新原节点而不是创建同 key 的第二个节点。
      existingNode.val = value;
      this.markAsRecentlyUsed(existingNode);
      return;
    }

    const newNode = new ListNode(key, value);
    this.nodeMap.set(key, newNode);
    this.appendNodeToTail(newNode);

    // 只在新 key 插入后检查容量，超限时 head.next 就是应该淘汰的节点。
    if (this.nodeMap.size > this.capacity) {
      this.removeLeastRecentlyUsedNode();
    }
  }
}