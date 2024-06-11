---
tags: ["REAL", "LREAL"]
---

# Floating Point

## Description

Floating point numbers include the `REAL` (32-bit) and `LREAL` (64-bit) data types according to the [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) standard.

:::note

An important topic worth understanding is how decimal values are stored in bits. To learn more about this check out a YouTube explanation from Computerphile [Floating point numbers](https://youtu.be/PZRI1IfStY0?si=7gsN-KSsvA5-Pak7).

:::

## Declaration

```iecst
a : REAL;
b : LREAL;

a : REAL := 1.0;
b : LREAL := 1.0;
```

## Literals

Support is included for defining floating point literals in either decimal or scientific notation. To improve readability, use underscore characters `_` to separate digits.

:::warning

Comma separators for thousands is not supported i.e. `1,000,000.0` for one million. Underscores can be used to provide visual separation. International notations that use a comma to separate the decimal is not supported i.e. 1,123 → 1.123.

:::

```iecst
a : REAL;

// Decimal notation
a := -1.0;
a := +205.3;
a := 100.856;

// Scientific notation
a := 1.0e2;
a := 6.45e+5;
a := 2.11e-7;

a := 1.0E2;
a := 6.45E+5;
a := 2.11E-7;

// With underscores
a := 0.123_456;
a := 123_456.0;

```
