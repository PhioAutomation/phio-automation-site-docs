---
sidebar_position: 7
tags: ["Exit", "Statement"]
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
