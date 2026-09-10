class Solution {
      /**
       * @param {number[]} heights
       * @return {number}
       */
      largestRectangleArea(heights: number[]): number {
          // 每个栈元素表示：[当前高度能够延伸到的最左下标, 柱子高度]。
          //
          // 栈内高度严格递增：
          // 遇到更矮或相等的柱子时，会先弹出栈顶并结算面积。
          const stack: Array<[number, number]> = [];

          let maxArea = 0;

          for (
              let currentIndex = 0;
              currentIndex < heights.length;
              currentIndex++
          ) {
              const currentHeight = heights[currentIndex];

              // 当前柱子最初只能从自己的位置开始形成矩形。
              // 如果左侧有更高或相等的柱子被弹出，它将继承更早的起点。
              let startIndex = currentIndex;

              while (
                  stack.length > 0 &&
                  stack[stack.length - 1][1] >= currentHeight
              ) {
                  // while 条件已经保证栈非空，所以 pop() 一定返回一个元组。
                  const [previousStart, previousHeight] = stack.pop()!;

                  // 当前柱子是 previousHeight 右侧第一个更矮或相等的柱子，
                  // 所以 previousHeight 能覆盖到 currentIndex - 1。
                  //
                  // 左边界：previousStart
                  // 右边界：currentIndex - 1
                  // 宽度：(currentIndex - 1) - previousStart + 1
                  //      = currentIndex - previousStart
                  const width = currentIndex - previousStart;
                  const area = previousHeight * width;

                  maxArea = Math.max(maxArea, area);

                  // 从 previousStart 到 currentIndex - 1 的柱子都不低于
                  // previousHeight，自然也不低于更矮或相等的 currentHeight。
                  //
                  // 因此当前柱子可以继承 previousHeight 原来的最左起点。
                  startIndex = previousStart;
              }

              // 所有比当前柱子高或相等的候选都已经结算。
              // 当前柱子携带自己能够到达的最左起点入栈。
              stack.push([startIndex, currentHeight]);
          }

          // 遍历结束后，栈中的柱子右侧始终没有遇到更矮或相等的柱子，
          // 因而都可以一直延伸到数组末尾。
          for (const [startIndex, height] of stack) {
              // 左边界：startIndex
              // 右边界：heights.length - 1
              // 宽度：(heights.length - 1) - startIndex + 1
              //      = heights.length - startIndex
              const width = heights.length - startIndex;
              const area = height * width;

              maxArea = Math.max(maxArea, area);
          }

          return maxArea;
      }
  }
