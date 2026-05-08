# Why is `any` Labeled as a Type Safety Hole?

In TypeScript, we use `any` when we do not know the type of a value. But when we use `any`, the TypeScript compiler stops checking the type completely.

That means any kind of value is allowed, and TypeScript cannot protect us from type-related mistakes.

If we overuse `any`, there is little benefit to using TypeScript because we lose type safety.

---

## Example of `any`

```ts
function processInput(value: any) {
    console.log(value.toUpperCase());
}

processInput(53);
```

### What Happens Here?

In this example, the function parameter type is `any`, so it accepts every type of value.

TypeScript does not check what value we pass during compile time. As a result, the code compiles successfully but crashes at runtime because numbers do not have a `toUpperCase()` method.

---

# Why is `unknown` a Safer Choice?

The `unknown` type in TypeScript also means:

> “I do not know the type yet.”

However, unlike `any`, it forces you to check the type before using the value.

TypeScript will not allow you to access properties or call methods on an `unknown` value until you narrow the type.

This makes `unknown` much safer because errors can be caught during compile time instead of causing runtime crashes.

---

## Example of `unknown`

```ts
function processInput(value: unknown) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}

processInput("ashif");
processInput(3.1416);
```

### Why is This Safer?

If we try to use `value` without checking its type first, TypeScript will throw a compile-time error.

That means we are forced to safely handle the value before using it.

---

# Type Narrowing

Type narrowing is the process of taking a broad or uncertain type and making it more specific inside a code branch.

TypeScript analyzes our checks and automatically narrows the type.

---

## Example of Type Narrowing

```ts
function stringOrNumber(strOrNum: number | string): string {
    if (typeof strOrNum === "string") {
        return "String";
    } else {
        return "Number";
    }
}
```

### How Type Narrowing Works

In this example, TypeScript understands that:

- Inside the `if` block, `strOrNum` is a `string`
- Inside the `else` block, `strOrNum` must be a `number`

Each time we add a type check, TypeScript updates what it believes the type is inside that block.

This process is called **type narrowing**.

---

# Key Takeaways

- `any` is called a **type safety hole** because TypeScript completely stops checking types when we use it.
- Errors usually appear only at runtime when using `any`.
- `unknown` is a safer alternative because it forces us to verify the type before using the value.
- Errors with `unknown` can be caught during compile time instead of runtime.
- Type narrowing is the process of converting a broad type into a more specific type using checks like:
  - `typeof`
  - `instanceof`
  - custom type guards

TypeScript automatically tracks these checks and narrows the type inside each branch.