---
sidebar_position: 6
tags: ["Repeat", "Statement"]
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
