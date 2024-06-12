---
title: While Statement
slug: while
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

# While Statement

The while statement is a loop statement which test a condition at the beginning of each loop. If the condition is true, the body of the while loop is executed. If the condition is false, the body is not executed and the evaluator continues on to the next statement.

```iecst
i : INT;
a : INT;

i := 1;
WHILE i <= 10
    a := i;
    i := i + 1;
END_WHILE;

print(a);   // a is 10
print(i);   // i is 11
```
