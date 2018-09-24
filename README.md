# groupGenerator

Simple node tool that divides students into (selected size) groups randomly.

## How to use

**Edit** the `data.js` file to reflect the names of the students and the desired group size.

**Run** the following command in your command-line:

`node groupGenerator.js` will log the randomly generated groups of students (using the group size specified in the `data.js` file).

_OR_ you can pass the group size as an argument through the command-line:

`node groupGenerator.js <groupSize>`

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
