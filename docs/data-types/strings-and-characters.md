---
sidebar_position: 4
tags: ["STRING", "WSTRING", "CHAR", "WCHAR"]
---

# Strings and Characters

### Description

A `STRING` or `WSTRING` represent a linear sequence of characters. The standard describes their differences as the `STRING` being constructed by characters from Row 00 of the ISO/IEC-10646 standard which defines the Universal Character Set (UCS) also known as [Unicode](https://en.wikipedia.org/wiki/Universal_Coded_Character_Set). The `WSTRING` is constructed of characters from the same standard character set inclusive of characters that can be describes by two bytes. The `CHAR` data type represents one single byte character and is the building block of the `STRING` data type. The `WCHAR` date type represents one double byte character and is the building block of the WSTRING data type.

:::note

The `STRING` definition is not strictly [ASCII](https://simple.wikipedia.org/wiki/ASCII) which defines characters with 7 bits from 16#00 to 16#7F. The maximum value 16#FF according to the Unicode definition is the 'ÿ' character.

:::

| Data Type           | Characters Supported              | Literal Enclosure |
| ------------------- | --------------------------------- | ----------------- |
| `CHAR` / `STRING`   | 16#00 to 16#FF <br/> NUL to ÿ     | Single quotes '   |
| `WCHAR` / `WSTRING` | 16#0000 to 16#FFFF <br/> NUL to � | Double quotes "   |

### Declaration

:::note

Currently the parser does not have support for subranges i.e. `STRING(60)` to limit the number of characters below the maximum of 255.

:::

```iecst title="Uninitialized"
// Single byte
a : STRING;     // Initializes to empty ''
b : CHAR;       // Initializes to empty ''

a := 'Hello world! I also support non-ASCII characters up to ÿ.';
b := 'ÿ';

// Double byte
c : WSTRING;    // Initializes to empty ""
d : WCHAR;      // Initializes to empty ""

c := "你好世界! Double byte characters introduce characters from many languagues.";
d := "你";
```

```iecst title="Initialized"
// Single byte
a : STRING := 'Hello world! I also support non-ASCII characters up to ÿ.';
b : CHAR := 'ÿ';

// Double byte
c : WSTRING := "你好世界! Double byte characters introduce characters from many languagues.";
d : WCHAR := "你";
```

The browser supports display of characters within the UTF-8 encoding which extends to 4 bytes and millions of supported characters. Checks are made to ensure the character is supported by the data type.

:::danger

```iecst
a : STRING;
b : WSTRING;

a := '你好世界! not supported by STRING';
b := "Alas 😭, emojis do not fall within the double byte character set.";
```

:::

:::warning

`STRING` and `WSTRING` types support a maximum of 255 characters. Concatenations or modifications to strings that exceed this limit will have characters truncated from the right (end) of the string.

:::

### Special cases

The $ symbol is used to denote special characters within the data types.

| Special case                            | Interpretation                   |
| --------------------------------------- | -------------------------------- |
| `$L` / `$l` / `$N` / `$n` / `$R` / `$r` | New line \n                      |
| `$P` / `$p`                             | Form feed \p                     |
| `$T` / `$t`                             | Tab character \t                 |
| `$$`                                    | $ dollar symbol                  |
| `$'` / `$"`                             | Single quote ' or Double quote " |

```iecst
a : WSTRING;
b : STRING;

a := "You might want to include a quote such as $"Peace begins with a smile.$" - Mother Teresa.";
print(a);

b := 'Maybe you need to start$na new line of text.';
print(b);
```

:::info

Current the editor does not support using the hexadecimal value substitutions after the $ symbol such as $3F → '?'. The author did not find a use case yet for this notation.

:::

:::tip

[List of Unicode characters](https://en.wikipedia.org/wiki/List_of_Unicode_characters) on Wikipedia can be a useful reference for tables of characters.

https://symbl.cc/en/unicode-table/ additionally provides tables and a handy search function when you need to find just the right emoji to describe how you're feeling. 😎

:::
