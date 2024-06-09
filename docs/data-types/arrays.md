---
sidebar_position: 5
---

# Arrays

### Description

The `ARRAY` is the only collection object described by the IEC 61131-3 standard. Dynamic length arrays are not described by the standard meaning array bounds must be provided with the variable declaration.

Currently, arrays of all other types are supported.

:::info

- A maximum of 3 dimensions is allowed.
- Arrays are limited to a maximum of 1000 elements.

:::

:::danger

- Attempting to assign to or accessing an array index that is outside of the defined bounds will result in an error.

:::

### Declaration

```iecst
arr : ARRAY[0..10] OF INT;                  // 1d array
arr2d : ARRAY[0..10, 1..5] OF INT;          // 2d array
arr3d : ARRAY[0..10, 1..5, 0..8] OF INT;    // 3d array
```

### Access

```iecst
i : INT;
a : INT := 2;
b : INT := 5;
arr : ARRAY[0..10] OF INT;

FOR i := 0 TO 10 BY 1 DO

    IF i > 2 THEN
        arr[i] := a;
    ELSE
        arr[i] := b;
    END_IF;
END_FOR;

print(arr[1]);
print(arr[3]);

```
