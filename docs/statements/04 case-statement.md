---
title: Case Statement
slug: case
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

# Case Statement

🔨 Under Construction

The case statement is another form of selector statement similar to the If statement.

```iecst
a : INT := 2;
b : INT;

CASE a OF
    1:
        ;
    // This block will be executed as a = 2
    2:
        b := 1;

    // Range expressions can be used to match a range of values
    3..6:
        ;

    // Comma separated values is an additional method to match multiple values
    7,9:
        ;

    // This provides a default branch.
    ELSE:
        ;
END_CASE;
```
