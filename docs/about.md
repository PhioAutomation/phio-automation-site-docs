---
sidebar_position: 1
---

# About

🔨 Under Construction

## Mission

We believe that learning a programming language should not require purchasing an expensive license and hardware. In fact, there should be no need to install any software, period.

Please enjoy using the editor as an educational tool!

## Editor

The editor provides code linting (analysis of syntax errors) and an interpreter to evaluate your code. The editor seeks to be fully compliant with the IEC 61131-3 standard and includes a few unique twists to support user learning.

The editor acts as a REPL which is a commonly available tool for many other programming languagues.

- Read - parse the input text based on syntax rules
- Evaluate - check for syntax errors, otherwise evaluate the code
- Print - return a response from the evaluator
- Loop - sequence can start again and run endlessly in a loop

## Comparison to Industry Software

- 🟢 No software to install. The editor user interface is a static website that makes API calls to perform useful functions.
- 🟢 No license to purchase. The REPL is expected to be free for educational purposes.
- 🟡 Does not compile. There is currently no compiler or runtime to use with physical hardware.
- 🟡 No inputs / outputs. Since there is no hardware, it is not possible to test connected I/O. Future revisions may include a 'mock' for I/O.
- 🟡 No cyclic scanning. Future revision will include this feature.
