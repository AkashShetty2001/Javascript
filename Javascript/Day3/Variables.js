// ...existing code...
/*
  Variables.js — concise examples, comments and quick revision notes
  Topics covered:
   - const, let, var differences
   - scopes: block, function, global
   - good/bad practices and quick exercises
*/

// 1) const: cannot be reassigned or redeclared in the same scope
const nameConst = "Akkash";
// nameConst = "Someone"; // Uncaught TypeError: Assignment to constant variable.

// 2) let: block scoped, can be reassigned but not redeclared in same scope
let score = 10;
score = 20; // allowed
// let score = 30; // SyntaxError: Identifier 'score' has already been declared

// 3) var: function scoped (older JS), can be redeclared and reassigned
var count = 1;
count = 2;
var count = 3; // redeclaration allowed (not recommended)

// Demo: block scope (let/const) vs no block scope for var inside functions
{
  let blockLet = "inside block";
  const blockConst = "also inside block";
  var blockVar = "declared with var inside block";
  console.log("blockLet:", blockLet);       // visible here
  console.log("blockConst:", blockConst);   // visible here
  console.log("blockVar:", blockVar);       // visible here
}
// console.log(blockLet);   // ReferenceError: blockLet is not defined
// console.log(blockConst); // ReferenceError: blockConst is not defined
console.log("blockVar outside block (function-scoped behavior):", blockVar); // visible

// Function scope example for var
function functionScopeDemo() {
  var x = "function scoped";
  if (true) {
    var x = "same var inside block (redeclared)";
    let y = "block scoped inside if";
  }
  console.log("x inside function:", x); // shows "same var inside block (redeclared)"
  // console.log(y); // ReferenceError: y is not defined
}
functionScopeDemo();

// Global variable example
// Assigning without var/let/const in a browser creates a global; in Node modules this creates a property on globalThis only if done intentionally.
// Bad practice — prefer explicit declarations.
location = "Bangalore"; // implicit global (avoid in real code)
console.log("implicit global location:", location);

// --- Your original variables and output (kept for continuity) ---
let name = "Akash";
let age = 23;
let subject = "java";
let food; // declared but undefined
console.log([name, age, subject, location, food]);

// --- Quick revision notes ---
// - Use const by default for values that shouldn't change.
// - Use let when you need to reassign.
// - Avoid var in modern code; it can produce subtle bugs due to function scoping.
// - Prefer explicit global access via globalThis when you truly need a global.

// --- Short exercises ---
// 1) Change 'const nameConst' to try a reassignment and observe the error.
// 2) Convert one 'var' to 'let' and see how behavior changes inside blocks.
// 3) Declare a variable inside a function with var and with let — log them outside the function to compare.

// --- Short quiz (self-check) ---
// Q1: Which declaration is block-scoped: var, let, or const?
// Q2: Can you redeclare a let variable in the same scope?
// Q3: What happens if you assign a value without var/let/const?

// ...existing code...