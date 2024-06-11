---
sidebar_position: 9
tags: ["No Operation", "Statement"]
---

# No Operation Statement

The no operation statement does...nothing. Think of this as a placeholder. There are not many practical uses for this statement but it is supported due to the IEC 61131-3 standard. This statement is simply a `;`.

```iecst
IF a THEN
    a := FALSE;
ELSE
// highlight-next-line
    ;           // No operation statement does nothing
END_IF;
```
