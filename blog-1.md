# The significance of union and intersection types in Typescript.

Union and intersection types is important topic in typescript. We will explain this topic now.

## What Are Union Types?

We can hold multiple types by using Union types. Example here:

### typescript

```
const age: string | number;
age = "sixteen"; // valid
age = 16; // valid
```

If we not sure about the variable type then we can use Union type, it's us flexibility for that.

### typescript

```
function getAge(value: string | number): number {
  if (typeof value === "string") {
    return parseInt(value);
  } else {
    return value;
  }
}
```

## What Are Intersection Types?

Intersection types combine multiple types into one. We can use multiple combine types in one type. example here:

### typescript

```
type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const person: Person = { name: "Rakib", age: 19 };
```

it's giving us to combine multiple types, and that's why it's so powerful tool.
