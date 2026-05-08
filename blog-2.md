# How Utility Types `Pick` and `Omit` Prevent Code Duplication

One of TypeScript's most powerful features is utility types. Utility types allow us to transform and manipulate existing types in flexible ways. They help reduce repetitive code and improve code maintainability.

In this blog, we will cover two commonly used built-in utility types: `Pick` and `Omit`, along with real examples.

---

# What Are Utility Types and Why Do We Need Them?

Utility types are predefined features provided by TypeScript. They allow us to create new types based on existing ones.

When working with large codebases, we often need to reuse and slightly modify existing types. Writing the same type structure repeatedly creates duplication and makes the code harder to maintain.

Utility types solve this problem by helping us derive new types from existing ones instead of rewriting everything manually.

This keeps our code:
- cleaner
- reusable
- scalable
- easier to maintain

---

# Now Let's Learn About `Pick` and `Omit`

## 1. `Pick`

The `Pick` utility type creates a new type by selecting a subset of properties from an existing type.

---

# Example of `Pick`

```ts
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
    address: string;
}
```

This is our master interface. It lives in one place and describes the complete shape of a user.

Now imagine we want to create a login form type. For login, we only need:
- `email`
- `password`

Instead of creating a new interface manually, we can use `Pick`.

The syntax looks like this:

```ts
type LoginForm = Pick<User, "email" | "password">;
```

Here, we are telling TypeScript:

> "From the `User` interface, pick only `email` and `password`."

The resulting type becomes:

```ts
{
    email: string;
    password: string;
}
```

This creates a specialized slice of the master interface without duplicating code.

---


## 2. `Omit`

The `Omit` utility type creates a new type by excluding specific properties from an existing type.

When we do not want certain fields, we can use `Omit`.

---

# Example of `Omit`

```ts
type PublicProfile = Omit<User, "password">;
```

In a public-facing profile page, we do not need the password field.

So TypeScript creates a new type containing everything from `User` except `password`.

The resulting type becomes:

```ts
{
    id: number;
    name: string;
    email: string;
    age: number;
    address: string;
}
```

The `password` field simply does not exist on this type.

---

# How This Keeps Our Code DRY

DRY stands for:

> Don't Repeat Yourself

The idea behind DRY is simple:

> If something changes, we should only need to update it in one place.

This is where `Pick` and `Omit` become extremely useful.

Because both utility types derive from the main `User` interface, they automatically stay updated whenever the master interface changes.

For example:

```ts
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
    address: string;
    phoneNumber: string;
}
```

We added a new field called `phoneNumber`.

Now every type built from `User` using `Pick` or `Omit` automatically understands the updated structure.

We do not need to manually update multiple interfaces.

Without utility types, we might need to rewrite changes in many places, which increases:
- duplication
- maintenance cost
- chances of bugs

But with `Pick` and `Omit`, everything stays connected to the master interface.

---

# How This Keeps Our Code DRY

DRY stands for:

> Don't Repeat Yourself

The idea behind DRY is simple:

> If something changes, we should only need to update it in one place.

This is where `Pick` and `Omit` become extremely useful.

Because both utility types derive from the main `User` interface, they automatically stay updated whenever the master interface changes.

For example:

```ts
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
    address: string;
    phoneNumber: string;
}
```

We added a new field called `phoneNumber`.

Now every type built from `User` using `Pick` or `Omit` automatically understands the updated structure.

We do not need to manually update multiple interfaces.

Without utility types, we might need to rewrite changes in many places, which increases:
- duplication
- maintenance cost
- chances of bugs

But with `Pick` and `Omit`, everything stays connected to the master interface.

---

# Final Thoughts

`Pick` and `Omit` are simple but extremely powerful utility types in TypeScript.

They help us:
- avoid code duplication
- create reusable type structures
- follow the DRY principle
- keep applications maintainable

Instead of creating multiple similar interfaces manually, we can derive specialized slices directly from a master interface.

This leads to cleaner and more professional TypeScript code.
