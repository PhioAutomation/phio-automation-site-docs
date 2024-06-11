---
tags:
  [
    "BYTE",
    "USINT",
    "SINT",
    "WORD",
    "UINT",
    "INT",
    "DWORD",
    "UDINT",
    "DINT",
    "LWORD",
    "ULINT",
    "LINT",
  ]
---

# Integers and Bit strings

### Description

Integers and bit strings are first defined by the number of bytes they consume. Secondly, they are described by what they represent. Integers are signed (representing positive and negative values) or unsigned (only positive values inclusive of 0). A bit string `BYTE` / `WORD` / `DWORD` / `LWORD` represents a collection of bits.

| Data Type | Number of 8-bit bytes | Minimum Value              | Maximum Value              |
| --------- | --------------------- | -------------------------- | -------------------------- |
| `BYTE`    | 1                     | 16#0                       | 16#ff                      |
| `USINT`   | 1                     | 0                          | 255                        |
| `SINT`    | 1                     | -128                       | 127                        |
| `WORD`    | 2                     | 16#0                       | 16#ffff                    |
| `UINT`    | 2                     | 0                          | 65535                      |
| `INT`     | 2                     | -32768                     | 32767                      |
| `DWORD`   | 4                     | 16#0                       | 16#ffff_ffff               |
| `UDINT`   | 4                     | 0                          | 4,294,967,295              |
| `DINT`    | 4                     | -2,147,483,648             | 2,147,483,647              |
| `LWORD`   | 8                     | 16#0                       | 16#ffff_ffff_ffff_ffff     |
| `ULINT`   | 8                     | 0                          | 18,446,744,073,709,551,615 |
| `LINT`    | 8                     | -9,223,372,036,854,775,808 | 9,223,372,036,854,775,807  |

### Declaration

### Number Systems

The following number systems are supported as described by the IEC 61131-3 standard.

| Number System | Base | Represented by                   |
| ------------- | ---- | -------------------------------- |
| Binary        | 2    | `0` / `1`                        |
| Octal         | 8    | `0` through `7`                  |
| Decimal       | 10   | `0` through `9`                  |
| Hexadecimal   | 16   | `0` through `9`, `A` through `F` |

### Literals

There are many methods for assigning integer literal values.

```iecst
a : INT;

// Use the 2# prefix to indicate binary number system
a := 2#10;
print(a);
printf(a, 'b2');

// Use the 8# prefix to indicate the octal number system
a := 8#107;
print(a);           // NOTE : currently no formatter for octal numbers in printf function


// Standard decimal number system
a := -10;
print(a);

// Use the 16# prefix to indicate the hexadecimal number system
a := 16#A;
print(a);
printf(a, 'x');
```

For large numbers it can help to use the underscore `_` character to provide some separation. Note that commas are not allowed within the literals.

```iecst
a : INT;

a := 2#01001000_11001111;
a := -32_768;
```

### Slice Access

Slice access enables the selection of a bit or byte from the integer or bit string.

```iecst
a : DINT := 2;

// A .number following the variable selects the i-th bit value
print(a.0);
print(a.1);

// Same occurs using the .Xnumber
print(a.X0);
print(a.X1);

// A .Bnumber selects the byte
print(a.B0);
print(a.B1);
print(a.B2);
print(a.B3);

// A .Wnumber selects the word
print(a.W0);
print(a.W1);
```
