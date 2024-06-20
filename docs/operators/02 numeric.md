---
title: Numeric
slug: numeric
# description: empty
# keywords:
#   - IEC 61131-3
#   - structured text
# tags: [print, printf]
# image: https://i.imgur.com/mErPwqL.png
last_update:
  date: 6/5/2024
  author: aparman
---

# Numeric

## Absolute Value

## Sin / Cos / Tan

## Asin / Acos / Atan

## Exponentials

## Exp / Ln

## Expt

## Log

## Square Root

The square root accepts any numeric type as input and returns a `REAL` or `LREAL`;

```iecst
a : REAL;
b : LREAL;

// highlight-start
a := SQRT(2);
b := SQRT(2);
// highlight-end

print(a);
print(b);
```

:::danger

```iecst
print(SQRT(-1));
```

Attempting to take the square root of negative numbers will result in an error.
:::
