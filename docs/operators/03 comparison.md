---
title: Comparison
slug: comparison
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

# Comparison

```iecst
a : INT := 6;
b : INT := 3;

print(a < b);       // False
print(a <= b);      // False
print(a > b);       // True
print(a >= b);      // True
```

```iecst
a : INT := 6;
b : INT := 3;

print(a == b);      // False
print(a <> b);      // True
```
