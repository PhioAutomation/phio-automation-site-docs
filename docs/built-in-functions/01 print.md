---
title: Print
sidebar_position: 1
slug: print
# description: empty
# keywords:
#   - IEC 61131-3
#   - structured text
tags: [print, printf]
# image: https://i.imgur.com/mErPwqL.png
last_update:
  date: 6/5/2024
  author: aparman
---

# Print Function

The `print` function allows the user to trace and better understand the code function and result of operations. For an educational tool, access to a print function is a first class need. As this is not described by the IEC 61131-3 standard, we have chosen to implement in our own manner.

:::note

- The print function provides a direct output for any expression that returns one of the supported without needing a `TO_STRING` type of conversion.
- The print function takes only one argument.

:::

```iecst title="Print Fun"
print(3 * 4);           // Print expressions directly without type conversion

a : INT := -5;
print(a);               // A 'name expression' returns the variable value

// Concatenation is required to print multiple items on the same line
print(CONCAT_STRING('The value of a is : ', TO_STRING(a)));
```

## Print Formatted

The `printf` function allows the use to print the value of numeric data types in another format.

The application supports the [Microsoft .Net format strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings) as the second function input.

```iecst title="Print formatted"
printf(2, 'b3');          // prints 010

printf(10, 'X');          // prints A

printf(1.234, 'f2');      // prints 1.23
```
