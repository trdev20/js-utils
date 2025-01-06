# @trdev20/js-utils

A comprehensive TypeScript/JavaScript utility library providing a collection of helper functions for arrays, strings, objects, and numbers.

## Installation

```bash
pnpm add @trdev20/js-utils
```

```bash
yarn add @trdev20/js-utils
```

```bash
npm install @trdev20/js-utils
```

## Features

- 🔍 **Validators** - Type checking and validation utilities
- 🛠️ **Operators** - Common operations for arrays, strings, and objects
- 📊 **Getters** - Helper functions to retrieve specific data
- 📦 **TypeScript Support** - Full type definitions included

## Usage

### String Utilities

```typescript
import { upperFirst, toCamelCase, toKebabCase, truncate, slugify } from "@trdev20/js-utils";

upperFirst("hello"); // => 'Hello'
toCamelCase("hello-world"); // => 'helloWorld'
toKebabCase("helloWorld"); // => 'hello-world'
truncate("hello world", 5); // => 'hello...'
slugify("Hello World!"); // => 'hello-world'
```

### Array Utilities

```typescript
import { uniqueArr, chunkArr, intersection, difference } from "@trdev20/js-utils";

uniqueArr([1, 2, 2, 3]); // => [1, 2, 3]
chunkArr([1, 2, 3, 4, 5], 2); // => [[1, 2], [3, 4], [5]]
intersection([1, 2, 3], [2, 3, 4]); // => [2, 3]
difference([1, 2, 3], [2, 3, 4]); // => [1]
```

### Object Utilities

```typescript
import { pick, omit } from "@trdev20/js-utils";

pick({ a: 1, b: 2, c: 3 }, ["a", "c"]); // => { a: 1, c: 3 }
omit({ a: 1, b: 2, c: 3 }, ["b"]); // => { a: 1, c: 3 }
```

### Validators

```typescript
import { isString, isNumber, isArray, isObject, isPrime, isOdd, isEven } from "@trdev20/js-utils";

isString("hello"); // => true
isNumber(123); // => true
isArray([1, 2, 3]); // => true
isObject({}); // => true
isPrime(7); // => true
isOdd(3); // => true
isEven(4); // => true
```

## API Documentation

### String Operators

- `upperFirst(str: string)`: Capitalizes the first letter of a string
- `toCamelCase(str: string)`: Converts a string to camelCase
- `toKebabCase(str: string)`: Converts a string to kebab-case
- `toTitleCase(str: string)`: Converts a string to Title Case
- `truncate(str: string, length: number)`: Truncates a string to specified length
- `slugify(str: string)`: Converts a string to URL-friendly format

### Array Operators

- `uniqueArr<T>(arr: T[])`: Returns array with unique items
- `chunkArr<T>(arr: T[], size: number)`: Splits array into chunks
- `intersection<T>(arr1: T[], arr2: T[])`: Returns common elements
- `difference<T>(arr1: T[], arr2: T[])`: Returns elements in arr1 not in arr2

### Object Operators

- `pick<T, K extends keyof T>(obj: T, keys: K[])`: Creates object with selected properties
- `omit<T, K extends keyof T>(obj: T, keys: K[])`: Creates object without specified properties

### Validators

- `isString(value: unknown)`: Checks if value is string
- `isNumber(value: unknown)`: Checks if value is number
- `isArray(value: unknown)`: Checks if value is array
- `isObject(value: unknown)`: Checks if value is object
- `isPrime(value: number)`: Checks if number is prime
- `isOdd(value: number)`: Checks if number is odd
- `isEven(value: number)`: Checks if number is even
- `isEmptyString(value: string)`: Checks if string is empty
- `isEmptyArray(value: unknown[])`: Checks if array is empty
- `isEmptyObject(value: object)`: Checks if object is empty

## License

MIT © [Taib Rabah]
