# groupGenerator

Simple node tool that divides students into (selected size) groups randomly.

## How to use

Run the following command in your command-line:

`node groupGenerator.js` will log multiple arrays grouping the students from the group size specified in the `data.js` file.

OR you can pass the group size as an arg:

`node groupGenerator.js <groupSize>`

### Example:

`node groupGenerator.js 2` can return:

```
[ 'G', 'E' ]
[ 'D', 'C' ]
[ 'B', 'A', 'F' ]
```
