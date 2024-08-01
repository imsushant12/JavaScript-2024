### Basic Syntax
- **Literals**: Matches the exact characters.
  - Example: `/cat/` matches "cat" in "catfish".

### Character Classes
- **`.`**: Matches any character except newline.
  - Example: `/c.t/` matches "cat", "cot", "cut".
- **`\d`**: Matches any digit (0-9).
  - Example: `/\d/` matches "2" in "a2b".
- **`\D`**: Matches any non-digit.
  - Example: `/\D/` matches "a" in "a2b".
- **`\w`**: Matches any word character (alphanumeric + underscore).
  - Example: `/\w/` matches "a" in "a2b".
- **`\W`**: Matches any non-word character.
  - Example: `/\W/` matches "!" in "a!b".
- **`\s`**: Matches any whitespace character.
  - Example: `/\s/` matches space in "a b".
- **`\S`**: Matches any non-whitespace character.
  - Example: `/\S/` matches "a" in "a b".

### Anchors
- **`^`**: Matches the beginning of a string.
  - Example: `/^a/` matches "a" in "abc".
- **`$`**: Matches the end of a string.
  - Example: `/a$/` matches "a" in "bca".

### Quantifiers
- **`*`**: Matches 0 or more times.
  - Example: `/ca*t/` matches "ct", "cat", "caat".
- **`+`**: Matches 1 or more times.
  - Example: `/ca+t/` matches "cat", "caat".
- **`?`**: Matches 0 or 1 time.
  - Example: `/ca?t/` matches "ct", "cat".
- **`{n}`**: Matches exactly `n` times.
  - Example: `/a{2}/` matches "aa" in "aaa".
- **`{n,}`**: Matches `n` or more times.
  - Example: `/a{2,}/` matches "aa" and "aaa".
- **`{n,m}`**: Matches between `n` and `m` times.
  - Example: `/a{2,3}/` matches "aa" and "aaa".

### Groups and Ranges
- **`[...]`**: Matches any one of the enclosed characters.
  - Example: `/[abc]/` matches "a", "b", or "c".
- **`[^...]`**: Matches any character not in the brackets.
  - Example: `/[^abc]/` matches "d" in "abcd".
- **`(...)`**: Groups multiple tokens together.
  - Example: `/(abc)/` matches "abc".
- **`|`**: Alternation (OR).
  - Example: `/a|b/` matches "a" or "b".

### Escaping Special Characters
- **`\`**: Escapes a special character to be treated as a literal.
  - Example: `/\./` matches "." instead of any character.

### Flags
- **`g`**: Global search.
  - Example: `/a/g` matches all "a"s in "banana".
- **`i`**: Case-insensitive search.
  - Example: `/a/i` matches "A" in "Apple".
- **`m`**: Multi-line search.
  - Example: `/^a/m` matches "a" at the start of each line.

### Examples
- **Matching a word**: `/\bJavaScript\b/`
  - Matches the word "JavaScript" as a whole word.
- **Matching digits**: `/\d+/`
  - Matches one or more digits.
- **Matching capitalized words**: `/\b[A-Z][a-z]*\b/`
  - Matches words that start with a capital letter.

### Methods
- **`string.match(regex)`**: Returns an array of matches or `null`.
  - Example: `"JavaScript".match(/\w/g)` returns `["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]`.
- **`regex.test(string)`**: Returns `true` or `false`.
  - Example: `/\d/.test("abc123")` returns `true`.
- **`string.replace(regex, replacement)`**: Replaces matches with the replacement string.
  - Example: `"abc123".replace(/\d/g, "X")` returns `"abcXXX"`.
