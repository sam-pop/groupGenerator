# groupGenerator

Simple node tool that divides students into (selected size) groups randomly.

## How to use

**Edit** the `data.js` file to reflect the names of the students and the desired group size for the division.

**Run** the following command in your command-line:

`node groupGenerator.js` will log multiple arrays grouping the students from the group size specified in the `data.js` file.

_OR_ you can pass the group size as an arg:

`node groupGenerator.js <groupSize>`

### Example

`node groupGenerator.js 2` can return:

```
[ 'G', 'E' ]
[ 'D', 'C' ]
[ 'B', 'A', 'F' ]
```
