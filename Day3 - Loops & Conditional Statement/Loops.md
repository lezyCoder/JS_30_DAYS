
# Loops in JavaScript

## Introduction
Loops are used to execute a block of code repeatedly until a specified condition is met. JavaScript supports several types of loops to handle different scenarios.

## Types of Loops

### 1. `for` Loop
The `for` loop is used to run a block of code a specific number of times.

**Syntax:**
```javascript
for (initialization; condition; increment) {
  // code to be executed
}
```

**Example:**
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
}
```

### 2. `while` Loop
The `while` loop executes a block of code as long as a specified condition is true.

**Syntax:**
```javascript
while (condition) {
  // code to be executed
}
```

**Example:**
```javascript
let i = 0;
while (i < 5) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
}
```

### 3. `do...while` Loop
The `do...while` loop is similar to the `while` loop, but it executes the block of code at least once before checking the condition.

**Syntax:**
```javascript
do {
  // code to be executed
} while (condition);
```

**Example:**
```javascript
let i = 0;
do {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
} while (i < 5);
```

### 4. `for...in` Loop
The `for...in` loop is used to iterate over the properties of an object.

**Syntax:**
```javascript
for (key in object) {
  // code to be executed
}
```

**Example:**
```javascript
const person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]); // Outputs: name: Alice, age: 25
}
```

### 5. `for...of` Loop
The `for...of` loop is used to iterate over iterable objects like arrays, strings, maps, and sets.

**Syntax:**
```javascript
for (element of iterable) {
  // code to be executed
}
```

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number); // Outputs: 1, 2, 3, 4, 5
}
```

## Conclusion
Loops are essential for performing repetitive tasks efficiently in JavaScript. Understanding the different types of loops and their use cases will help you write more effective and concise code.

---

Happy coding! 😊
```

Feel free to modify this README file as needed. If you have any more questions or need further assistance, let me know! 🚀