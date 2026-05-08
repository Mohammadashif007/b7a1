# TypeScript Problem Solving & Blog Tasks

This repository contains solutions to 7 TypeScript problem-solving tasks along with 2 blog posts explaining important TypeScript concepts.

---

# Files in This Repository

- `solutions.ts` → Contains all 7 TypeScript problem solutions
- `blog-1.md` → Blog about `any` vs `unknown`
- `blog-2.md` → Blog about `Pick` and `Omit`
- `README.md` → Project overview and instructions

---

# Technologies Used

- TypeScript

---

# Problem Solutions

## Problem 1: Filter Even Numbers

Create a TypeScript function `filterEvenNumbers` that accepts an array of numbers and returns a new array containing only the even numbers.

### Sample Input

```ts
filterEvenNumbers([1, 2, 3, 4, 5, 6]);
```

### Sample Output

```ts
[2, 4, 6];
```

---

## Problem 2: Reverse a String

Write a function `reverseString` that takes a string as input and returns the reversed version of that string.

### Sample Input

```ts
reverseString("typescript");
```

### Sample Output

```ts
"tpircsepyt";
```

---

## Problem 3: Union Type & Type Guards

Define a union type `StringOrNumber` and create a function `checkType` that uses type guards to return `"String"` if the input is a string or `"Number"` if the input is a number.

### Sample Input 1

```ts
checkType("Hello");
```

### Sample Output 1

```ts
"String";
```

### Sample Input 2

```ts
checkType(42);
```

### Sample Output 2

```ts
"Number";
```

---

## Problem 4: Generic Function with Constraints

Write a generic function `getProperty` that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

### Sample Input

```ts
const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

getProperty(user, "name");
```

### Sample Output

```ts
"John Doe";
```

---

## Problem 5: Interface & Object Manipulation

Define an interface `Book` with properties `title`, `author`, and `publishedYear`.

Create a function `toggleReadStatus` that accepts a `Book` object and returns a new object with an added `isRead` property (boolean), defaulting to `true`.

### Sample Input

```ts
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

toggleReadStatus(myBook);
```

### Sample Output

```ts
{
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
  isRead: true
}
```

---

## Problem 6: Class & Inheritance

Create a class `Person` with a `name` and `age`.

Then, create a subclass `Student` that adds a `grade` property.

Include a method `getDetails` in the `Student` class that returns a string with the student's name, age, and grade.

### Sample Input

```ts
const student = new Student("Alice", 20, "A");

student.getDetails();
```

### Sample Output

```ts
"Name: Alice, Age: 20, Grade: A";
```

---

## Problem 7: Array Intersection

Create a function `getIntersection` that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.

### Sample Input

```ts
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
```

### Sample Output

```ts
[3, 4, 5];
```

---

# Blog Topics

## Blog 1

### Why is `any` labeled a "type safety hole," and why is `unknown` the safer choice for handling unpredictable data?

Topics Covered:

- What is `any` in TypeScript
- Why `any` removes type safety
- Problems caused by overusing `any`
- What is `unknown`
- Why `unknown` is safer
- Type narrowing in TypeScript

---

## Blog 2

### How do `Pick` and `Omit` utility types prevent code duplication while creating specialized "slices" of a master interface?

Topics Covered:

- Introduction to utility types
- What is `Pick`
- What is `Omit`
- Creating reusable types
- Keeping code DRY (Don't Repeat Yourself)
- Improving maintainability with TypeScript utility types

---


# Author

Ashif