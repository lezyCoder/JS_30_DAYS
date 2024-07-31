
# Data Types in JavaScript

## Introduction
JavaScript is a versatile programming language that supports various data types. Understanding these data types is fundamental to writing effective and efficient code. This file  provides an overview of the different data types in JavaScript, categorized into primitive and non-primitive types.

## Primitive Data Types
Primitive data types can store a single value in a variable. JavaScript has the following primitive data types:

1. **String**
   - Represents a sequence of characters.
   - Example:
     ```javascript
     let name = "Alice";
     ```

2. **Number**
   - Represents both integer and floating-point numbers.
   - Example:
     ```javascript
     let age = 25;
     let price = 19.99;
     ```

3. **Boolean**
   - Represents a logical entity and can have two values: `true` or `false`.
   - Example:
     ```javascript
     let isStudent = true;
     ```

4. **Null**
   - Represents the intentional absence of any object value.
   - Example:
     ```javascript
     let emptyValue = null;
     ```

5. **Undefined**
   - Represents an uninitialized variable.
   - Example:
     ```javascript
     let notAssigned;
     ```

6. **Symbol**
   - Represents a unique and immutable identifier (introduced in ES6).
   - Example:
     ```javascript
     let uniqueId = Symbol('id');
     ```

7. **BigInt**
   - Represents integers with arbitrary precision (introduced in ES2020).
   - Example:
     ```javascript
     let bigNumber = BigInt(123456789012345678901234567890);
     ```

## Non-Primitive Data Types
Non-primitive data types can store multiple values in a variable. JavaScript has the following non-primitive data types:

1. **Object**
   - Represents a collection of properties.
   - Example:
     ```javascript
     let person = { name: "Alice", age: 25 };
     ```

2. **Array**
   - Represents an ordered list of values.
   - Example:
     ```javascript
     let numbers = [1, 2, 3, 4, 5];
     ```

3. **Function**
   - Represents a block of code designed to perform a particular task.
   - Example:
     ```javascript
     function greet() {
       console.log("Hello!");
     }
     ```

4. **Date**
   - Represents dates and times.
   - Example:
     ```javascript
     let today = new Date();
     ```

5. **Map**
   - Represents a collection of key-value pairs.
   - Example:
     ```javascript
     let map = new Map();
     map.set('key', 'value');
     ```

6. **Set**
   - Represents a collection of unique values.
   - Example:
     ```javascript
     let set = new Set([1, 2, 3, 4, 5]);
     ```

## Conclusion
Understanding the different data types in JavaScript is crucial for effective programming. This file provides a basic overview of the primitive and non-primitive data types available in JavaScript. For more detailed information, refer to the MDN Web Docs.

Feel free to contribute to this README by adding more examples or clarifications!

---

Happy coding! 😊
