# More on Array

## Difference between map and foreach method

Sure! Here's a comparison of the `map` and `forEach` methods in JavaScript in a tabular format:

| Feature          | `map`                                                                                                      | `forEach`                                                                       |
| ---------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Purpose**      | Creates a new array with the results of calling a provided function on every element in the calling array. | Executes a provided function once for each array element.                       |
| **Return Value** | Returns a new array with transformed elements.                                                             | Returns `undefined`.                                                            |
| **Mutability**   | Does not modify the original array.                                                                        | Does not modify the original array.                                             |
| **Chaining**     | Can be chained with other array methods.                                                                   | Cannot be chained directly (returns `undefined`).                               |
| **Use Case**     | When you need to transform elements and create a new array.                                                | When you need to perform an action on each element without needing a new array. |
| **Example**      | ```javascript                                                                                              | ```javascript                                                                   |
|                  | const numbers = [1, 2, 3, 4];                                                                              | const numbers = [1, 2, 3, 4];                                                   |
|                  | const doubled = numbers.map(num => num \* 2);                                                              | numbers.forEach(num => console.log(num \* 2));                                  |
|                  | console.log(doubled); // [2, 4, 6, 8]                                                                      | // Outputs: 2, 4, 6, 8                                                          |
|                  | ```                                                                                                        | ```                                                                             |


## Difference between unshift and push method 


Here's a comparison of the `unshift` and `push` methods in JavaScript:

| Feature            | `unshift`                                  | `push`                                     |
|--------------------|--------------------------------------------|--------------------------------------------|
| **Purpose**        | Adds one or more elements to the beginning of an array. | Adds one or more elements to the end of an array. |
| **Return Value**   | Returns the new length of the array.        | Returns the new length of the array.        |
| **Mutability**     | Modifies the original array.                | Modifies the original array.                |
| **Performance**    | Generally slower because it shifts all existing elements to higher indexes. | Generally faster because it simply adds elements to the end. |
| **Use Case**       | When you need to add elements to the start of an array. | When you need to add elements to the end of an array. |
| **Example**        | ```javascript                              | ```javascript                              |
|                    | let arr = [2, 3, 4];                       | let arr = [2, 3, 4];                       |
|                    | arr.unshift(1);                            | arr.push(5);                               |
|                    | console.log(arr); // [1, 2, 3, 4]          | console.log(arr); // [2, 3, 4, 5]          |
|                    | ```                                        | ```                                        |

(1) What is the difference between unshift() and Push() method in .... https://www.geeksforgeeks.org/what-is-the-difference-between-unshift-and-push-method-in-javascript/.

(2) Time complexity of unshift () vs. push () in Javascript. https://stackoverflow.com/questions/12250697/time-complexity-of-unshift-vs-push-in-javascript.

(3) JavaScript Array Push Vs Unshift Methods - A-Z Tech. https://www.jquery-az.com/javascript-array-push-vs-unshift-methods-explained-with-4-examples/.

(4) Difference between push() and unshift() methods in javascript. https://www.tutorialspoint.com/difference-between-push-and-unshift-methods-in-javascript.

## Difference between pop and shift method 

Here's a comparison of the `pop` and `shift` methods in JavaScript:

| Feature            | `pop`                                      | `shift`                                    |
|--------------------|--------------------------------------------|--------------------------------------------|
| **Purpose**        | Removes the last element from an array.    | Removes the first element from an array.   |
| **Return Value**   | Returns the removed element.               | Returns the removed element.               |
| **Mutability**     | Modifies the original array.               | Modifies the original array.               |
| **Index Adjustment**| Does not affect the indexes of other elements. | Shifts all remaining elements to lower indexes. |
| **Performance**    | Generally faster because it only removes the last element. | Generally slower because it shifts all elements to the left. |
| **Use Case**       | When you need to remove the last element of an array. | When you need to remove the first element of an array. |
| **Example**        | ```javascript                              | ```javascript                              |
|                    | let arr = [1, 2, 3, 4];                    | let arr = [1, 2, 3, 4];                    |
|                    | let lastElement = arr.pop();               | let firstElement = arr.shift();            |
|                    | console.log(lastElement); // 4             | console.log(firstElement); // 1            |
|                    | console.log(arr); // [1, 2, 3]             | console.log(arr); // [2, 3, 4]             |
|                    | ```                                        | ```                                        |

Both methods are useful depending on whether you need to remove elements from the beginning or the end of an array¹²³.

If you have any more questions or need further clarification, feel free to ask! 😊

Source: Conversation with Copilot, 3/8/2024
(1) Shift() vs pop() Method in JavaScript - GeeksforGeeks. https://www.geeksforgeeks.org/shift-vs-pop-method-in-javascript/.

(2) Difference between shift() and pop() methods in Javascript. https://www.tutorialspoint.com/difference-between-shift-and-pop-methods-in-javascript.

(3) Shift() vs pop() methods in JavaScript? - Online Tutorials Library. https://www.tutorialspoint.com/shift-vs-pop-methods-in-javascript.

(4) Remove Items from an Array with pop() and shift() - freeCodeCamp.org. https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-from-an-array-with-pop-and-shift.