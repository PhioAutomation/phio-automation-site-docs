---
sidebar_position: 3
tags: ["IF", "THEN", "ELSIF", "ELSE", "Statement"]
---

# If Statement

The if statement evaluates an expression that results in a boolean value. If the result is true, any statements that follow the `THEN` keyword are executed. All if statements begin with the `IF` keyword and end with the `END_IF` keyword followed by a `;`.

The if statement is considered a 'selection' statement along with the [case statement](./case-statement.md) as they both handle selective execution (or avoidance) of a set of statements.

:::warning[Only one set of block statements will be executed]

:::

## Simple If

Below is an example of a 'simple' if statement. The expression statement `b := 1;` is conditionally executed because a is true. While this example has only a single statement contained within the block, any number of statements are permitted. The statement begins with the `IF` keyword and is followed by a condition. The condition is any expression that results in a boolean value (true or false). This can include boolean variables, operators such as comparison or equality, or other functions. The `THEN` keyword indicates the beginning of the block statements to be executed when the condition is true. The `END_IF` keyword and `;` identify the end of the block statements.

```iecst
a : BOOL := TRUE;
b : INT := 0;

IF a THEN
    b := 1;   // a is true, b is assigned to 1
END_IF;
```

## Elsif Clause

Additional branching if statements continue to test conditions in sequential order.

```iecst
a : BOOL := TRUE;
b : INT := 0;

IF b > 0 THEN
    b := 1;   // Not executed, b is not greater than 0
// highlight-start
ELSIF a THEN
    b := 2;   // a is true, b is assigned to 2
// highlight-end
END_IF;
```

## Else Clause

The else clause does not test a condition but rather provides a default pathway to execute statements when all other conditions have evaluated as false.

```iecst
a : BOOL := TRUE;
b : INT := 0;

IF b > 0 THEN
    b := 1;   // Not executed, b is not greater than 0

ELSIF NOT a THEN
    b := 2;   // Not executed, a is true so NOT a is false
// highlight-start
ELSE
    b := 3;   // None of the other conditions is true, b is assigned to 3
// highlight-end
END_IF;
```

:::tip What happens when multiple clauses evaluate to true?

What is the value of b? Check it out in the editor!

```iecst
a : BOOL := TRUE;
b : INT := 0;

IF b == 0 THEN
    b := 1;
ELSIF a THEN
    b := 2;
ELSE
    b := 3;
END_IF;
```

:::
