// Given a string containing only (, ), {, }, [, ],
// return true if the brackets are valid.
// Valid means:

// Every open bracket has a corresponding close bracket
// Brackets close in the correct order

// Input:  "()"       → true
// Input:  "()[]{}"   → true
// Input:  "(]"       → false
// Input:  "([)]"     → false
// Input:  "{[]}"     → true

// Think about:

// What does "correct order" actually mean?
// When you see a closing bracket, what do you need to check?
// What data structure gives you access to the most recently opened bracket?

function isValidBrute(s) {
  let prevLength = -1;

  while (prevLength !== s.length) {
    prevLength = s.length;

    s = s.replace("()", "").replace("[]", "").replace("{}", "");
  }

  return s.length === 0;
}

// console.log(isValidBrute("()"));       // true
// console.log(isValidBrute("()[]{}"));   // true
// console.log(isValidBrute("(]"));       // false
// console.log(isValidBrute("([)]"));     // false
// console.log(isValidBrute("{[]}"));     // true

function isValidOptimal(s) {
  const stack = [];

  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      const top = stack.pop();

      if (top !== pairs[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidOptimal("()")); // true
console.log(isValidOptimal("()[]{}")); // true
console.log(isValidOptimal("(]")); // false
console.log(isValidOptimal("([)]")); // false
console.log(isValidOptimal("{[]}")); // true
