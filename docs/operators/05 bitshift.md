---
title: Bitshift
slug: bitshift
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

# Bitshift

:::note
All bit shift functions can return either their input type or the bitstring type with the same number of bits. For example, if the input is a `DINT`, the return can be assigned directly to either a `DINT` or a `DWORD` without conversion.
The number of bits to shift or rotate is a `USINT` type.
:::

## SHL - Shift Left

Shifts all bits of the input left by `N` places.

```iecst
a : UINT := 51919;

printf(a, 'b16');   // 1100 1010 1100 1111
// highlight-next-line
a := SHL(a, 4);
printf(a, 'b16');   // 1010 1100 1111 0000
```

## SHR - Shift Right

Shifts all bits of the input right by `N` places.

```iecst
a : UINT := 51919;

printf(a, 'b16');   // 1100 1010 1100 1111
// highlight-next-line
a := SHR(a, 4);
printf(a, 'b16');   // 0000 1100 1010 1100
```

## ROL - Rotate Left

Rotates all bits of the input left by `N` places. This preserves all bits of the input.

```iecst
a : UINT := 51919;

printf(a, 'b16');   // 1100 1010 1100 1111
// highlight-next-line
a := ROL(a, 4);
printf(a, 'b16');   // 1010 1100 1111 1100
```

## ROR - Rotate Right

Rotates all bits of the input right by `N` places. This preserves all bits of the input.

```iecst
a : UINT := 51919;

printf(a, 'b16');   // 1100 1010 1100 1111
// highlight-next-line
a := ROR(a, 4);
printf(a, 'b16');   // 1111 1100 1010 1100
```
