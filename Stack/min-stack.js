// Design a stack that supports:

// push(val) — push element onto stack
// pop() — remove top element
// top() — get top element
// getMin() — retrieve minimum element in O(1)

// All operations must be O(1).
// MinStack stack = new MinStack();
// stack.push(-2);
// stack.push(0);
// stack.push(-3);
// stack.getMin(); → -3
// stack.pop();
// stack.top();    → 0
// stack.getMin(); → -2

// The hard part: getMin() must be O(1).
// Think about:

// A regular stack doesn't track minimums — how do you add that?
// When you pop an element, how do you know what the new minimum is?
// Can you store extra information alongside each value?

// Naive Approach — Scan For Minimum

class MinStackNaive {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }
  pop() {
    this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return Math.min(...this.stack);
  } // O(n) ❌
}

// Approach 1 — Stack of [value, currentMin] Pairs

class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    // Current min is either this new value, or whatever min was before
    const currentMin =
      this.stack.length === 0
        ? val
        : Math.min(val, this.stack[this.stack.length - 1][1]);

    this.stack.push([val, currentMin]);
  }

  pop() {
    this.stack.pop(); // min automatically restored to previous frame
  }

  top() {
    return this.stack[this.stack.length - 1][0]; // just the value
  }

  getMin() {
    return this.stack[this.stack.length - 1][1]; // the stored min
  }
}

// Approach 2 — Auxiliary Min Stack

class MinStackAux {
  constructor() {
    this.stack = []; // main stack
    this.minStack = []; // tracks minimums only
  }

  push(val) {
    this.stack.push(val);

    // Push to minStack only if val is new minimum (or minStack empty)
    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    const removed = this.stack.pop();

    // If we're removing the current minimum, update minStack too
    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
