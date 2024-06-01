---
sidebar_position: 4
tags: ["For", "Statement"]
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
