# groupGenerator

> Simple node tool that divides students into groups. _randomly_.

## Customizable Options

- Student names
- Group size
- Pair-programming driver/navigator limitation

## How to use

**Edit** the `data.js` file to reflect the names of the students, the desired group size and to specify limitations for pair-programming (group size of 2).

**Run** the following command in your command-line:

- `node groupGenerator.js` - will log the randomly generated groups of students (using the group size specified in the `data.js` file).

_OR_

- `node groupGenerator.js <groupSize>` - will pass the group size as an argument through the command-line:

### Example

`node groupGenerator.js 3` can return:

```plaintext
Group #1: E,F,A
Group #2: C,D,B,G
```

`node groupGenerator.js 2` can return:

```plaintext
1) Driver: F, Navigator: G
2) Driver: C, Navigator: D
3) Driver: E, Navigator: A
```
