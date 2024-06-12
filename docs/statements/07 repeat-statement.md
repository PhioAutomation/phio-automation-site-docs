---
title: Repeat Statement
slug: repeat
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

# Repeat Statement

The repeat loop statement executes the body of the statement first and then tests a condition. If the condition is true, the loop is completed. If the condition is false, the body is executed again.

```iecst
i : INT;
a : INT;

i := 1;
REPEAT
    a := i;
    i := i + 1;
UNTIL i >= 10
END_REPEAT;
```
