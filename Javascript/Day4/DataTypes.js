// Primitive data types in JavaScript
// Primitive values are immutable (cannot be changed in-place).
// 1) Number - used for both integer and floating-point values.
let n = 10;                         // an integer number
console.log(typeof n);              // 'number'

// 2) String - sequence of characters
let name = "Akash";
console.log(typeof name);           // 'string'

// 3) Boolean - true/false
let isValid = true;
console.log(typeof isValid);        // 'boolean'

// 4) Undefined - variable declared but not assigned a value
let employeeId;
console.log(typeof employeeId);     // 'undefined'

// 5) Null - represents "no value". Note: typeof null === 'object' (historic JS quirk)
let empty = null;
console.log(typeof empty);          // 'object' (but value is null)

// 6) BigInt - for integers larger than Number.MAX_SAFE_INTEGER
let num = 1223456789098765432123456789098765432n;
console.log(typeof num);            // 'bigint'

// 7) Symbol - creates unique identifiers, useful for object keys
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);           // false, symbols with same description are unique


// Non-primitive (reference) data types
// Reference values are mutable and their typeof is typically 'object' (except functions)

// Arrays - ordered list of values (arrays are objects in JS)
let arr = [17, 18, true, "akash", "kd", 2.8, undefined];
console.log(arr);                   // full array contents
console.log(typeof arr);            // 'object' (arrays are objects)


// Objects - key/value storage (plain objects)
let user = {
    name: "yash",
    age: 17,
    accNo: 1234567,
    category: "obc",
    isvalid: true
};
console.log(user);                  // object contents
console.log(typeof user);           // 'object'
console.log(user.accNo);            // access property by key


// Functions - callable values (functions are a special kind of object)
// You can store a function in a variable and call it later.
let functionValue = function add() {
    console.log(1 + 7);             // prints 8 when the function runs
};

console.log(functionValue);         // prints function source/representation
console.log(functionValue());       // calls the function (logs 8), then prints the return value (undefined)


//immutable primitive types
let str='hello';
str[0]='H'; // trying to change first character
console.log(str); // still prints 'hello' as strings are immutable

//mutable reference types
let array=[1,2,3];
array[0]=10; // changing first element
console.log(array); // prints [10,2,3] as arrays are mutable

//js uses ecma script standard for data types and their behavior








