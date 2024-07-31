
# Conditional Statements in JavaScript

## Introduction
Conditional statements are used to perform different actions based on different conditions. JavaScript supports several types of conditional statements to control the flow of the program.

## Types of Conditional Statements

### 1. `if` Statement
The `if` statement executes a block of code if a specified condition is true.

**Syntax:**
```javascript
if (condition) {
  // code to be executed if the condition is true
}
```

**Example:**
```javascript
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
```

### 2. `if...else` Statement
The `if...else` statement executes one block of code if a condition is true, and another block of code if the condition is false.

**Syntax:**
```javascript
if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}
```

**Example:**
```javascript
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

### 3. `else if` Statement
The `else if` statement specifies a new condition to test if the first condition is false.

**Syntax:**
```javascript
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition2 is true
} else {
  // code to be executed if both condition1 and condition2 are false
}
```

**Example:**
```javascript
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
```

### 4. `switch` Statement
The `switch` statement evaluates an expression and executes code blocks based on the matching case.

**Syntax:**
```javascript
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression doesn't match any case
}
```

**Example:**
```javascript
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}
```

## Conclusion
Conditional statements are essential for controlling the flow of a program based on different conditions. Understanding how to use `if`, `if...else`, `else if`, and `switch` statements will help you write more dynamic and responsive JavaScript code.

---

Happy coding! 😊
```

Feel free to modify this README file as needed. If you have any more questions or need further assistance, let me know! 🚀