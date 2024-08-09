# JavaScript Map & Set Methods

## Map

A `Map` object in JavaScript is a collection of key-value pairs where the keys can be of any data type.

### Map Methods

1. **`new Map()`**
   - Creates a new `Map` object.

2. **`map.set(key, value)`**
   - Adds or updates a key-value pair in the `Map`.
   - **Parameters**:
     - `key`: The key of the element to add to the `Map`.
     - `value`: The value of the element to add to the `Map`.
   - **Returns**: The `Map` object.

3. **`map.get(key)`**
   - Returns the value associated with the specified key.
   - **Parameters**: 
     - `key`: The key of the element to return from the `Map`.
   - **Returns**: The value associated with the key, or `undefined` if the key doesn't exist.

4. **`map.has(key)`**
   - Checks if a key exists in the `Map`.
   - **Parameters**: 
     - `key`: The key to check for in the `Map`.
   - **Returns**: `true` if the key exists, `false` otherwise.

5. **`map.delete(key)`**
   - Removes the key-value pair with the specified key.
   - **Parameters**: 
     - `key`: The key of the element to remove from the `Map`.
   - **Returns**: `true` if the element was successfully removed, `false` if the key doesn't exist.

6. **`map.clear()`**
   - Removes all key-value pairs from the `Map`.
   - **Returns**: `undefined`.

7. **`map.size`**
   - Returns the number of key-value pairs in the `Map`.
   - **Returns**: The size of the `Map`.

8. **`map.keys()`**
   - Returns a new `Iterator` object that contains the keys for each element in the `Map` in insertion order.
   - **Returns**: An iterator object.

9. **`map.values()`**
   - Returns a new `Iterator` object that contains the values for each element in the `Map` in insertion order.
   - **Returns**: An iterator object.

10. **`map.entries()`**
    - Returns a new `Iterator` object that contains the `[key, value]` pairs for each element in the `Map` in insertion order.
    - **Returns**: An iterator object.

11. **`map.forEach(callback, [thisArg])`**
    - Executes a provided function once for each key-value pair in the `Map`.
    - **Parameters**: 
      - `callback`: Function to execute for each element.
      - `thisArg` (optional): Value to use as `this` when executing the callback.

12. **`map[Symbol.iterator]()`**
    - Returns a new `Iterator` object that contains the `[key, value]` pairs for each element in the `Map` in insertion order.
    - **Returns**: An iterator object.

## Set

A `Set` object in JavaScript is a collection of unique values, where each value can occur only once.

### Set Methods

1. **`new Set()`**
   - Creates a new `Set` object.

2. **`set.add(value)`**
   - Adds a new element with the specified value to the `Set`.
   - **Parameters**: 
     - `value`: The value to add to the `Set`.
   - **Returns**: The `Set` object.

3. **`set.has(value)`**
   - Checks if a value exists in the `Set`.
   - **Parameters**: 
     - `value`: The value to check for in the `Set`.
   - **Returns**: `true` if the value exists, `false` otherwise.

4. **`set.delete(value)`**
   - Removes the specified value from the `Set`.
   - **Parameters**: 
     - `value`: The value to remove from the `Set`.
   - **Returns**: `true` if the element was successfully removed, `false` if the value doesn't exist.

5. **`set.clear()`**
   - Removes all elements from the `Set`.
   - **Returns**: `undefined`.

6. **`set.size`**
   - Returns the number of elements in the `Set`.
   - **Returns**: The size of the `Set`.

7. **`set.keys()`**
   - Returns a new `Iterator` object that contains the values for each element in the `Set` in insertion order.
   - **Returns**: An iterator object.

8. **`set.values()`**
   - Returns a new `Iterator` object that contains the values for each element in the `Set` in insertion order. (Same as `set.keys()` in `Set`)
   - **Returns**: An iterator object.

9. **`set.entries()`**
    - Returns a new `Iterator` object that contains the `[value, value]` pairs for each element in the `Set` in insertion order.
    - **Returns**: An iterator object.

10. **`set.forEach(callback, [thisArg])`**
    - Executes a provided function once for each value in the `Set`.
    - **Parameters**: 
      - `callback`: Function to execute for each element.
      - `thisArg` (optional): Value to use as `this` when executing the callback.

11. **`set[Symbol.iterator]()`**
    - Returns a new `Iterator` object that contains the values for each element in the `Set` in insertion order.
    - **Returns**: An iterator object.

## Iteration

Both `Map` and `Set` can be iterated over using `for...of`, `forEach`, or using iterators directly.

```javascript
// Example with Map
const myMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);

for (const [key, value] of myMap) {
  console.log(key, value);
}

// Example with Set
const mySet = new Set([1, 2, 3]);

for (const value of mySet) {
  console.log(value);
}
