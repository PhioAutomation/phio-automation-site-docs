---
title: For Statement
slug: for
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

# For Statement

The for statement is the most common of the loop statements. It executes the body of the loop a number of times based on the lower bound, upper bound, and increment. The loop exits when the iterator variable has exceeded the bound.

```iecst
i : INT;
a : INT;

FOR i := 1 TO 10 BY 1 DO
      a := i;
END_FOR;

print(a);   // a is 10
print(i);   // i is 10
```
