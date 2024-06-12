---
title: Exit Statement
slug: exit
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

# Exit Statement

🔨 Under Construction

The exit statement is used to conditionally exit a looping statement (For, While, Repeat).

```iecst
i : INT;
a : INT;

FOR i := 1 TO 10 BY 1 DO
    IF i <= 5 THEN
        a := i;
    ELSE
        EXIT;
    END_IF;
END_FOR;
```
