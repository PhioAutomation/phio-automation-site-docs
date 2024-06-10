---
tags: ["NOT"]
---

# Unary Expressions

A unary expression consists of a single operator and single operand.

### Unary (-)

Negates the values of the operand.

```iecst
a : INT := 5;
print(-a);          // -5
```

### Logical NOT

Inverts the boolean value of the operand. If the operand is true, the result will be false and vice versa.

```iecst
print(NOT TRUE);        // True
print(NOT FALSE);       // False

a : BOOL := FALSE;      // a begins as FALSE

IF NOT a THEN           // Condition evaluates to TRUE
    a := NOT a;         // The value of a is inverted from FALSE to TRUE
END_IF;

print(a);               // TRUE
```

### Bitwise NOT

Inverts each bit of the operand. For any given bit, if it is `0` it becomes `1` and vice versa.

```iecst
a : INT := 2;
printf(a, 'b3');        // 010

a := NOT a;
printf(a, 'b3');        // 101
```
