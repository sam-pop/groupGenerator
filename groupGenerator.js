/*
 * Group Generator:
 ******************
 * ~ Created by Samuel Poplovitch
 */

const data = require("./data");
// Mapping the variable to the data file
const names = data.names;
// Names we do not want to be in the first index of the array when divided into pairs (groupSize = 2, for pair programming, first name is the driver)
const mustBeNavigators = data.mustBeNavigators;

// Declare the groupSize variable and assign it a value from the data *unless* the value is passed as an arg throught the CLI
// We use `var` to declare the groupSize variable and assign a conditional value to it simultaneously
var groupSize = parseInt(process.argv[2])
  ? (groupSize = process.argv[2])
  : (groupSize = data.groupSize);

// Count the number of groups
let counter = 0;

// Runs until all names are grouped
while (names.length > 0) {
  const tempArr = [];
  for (let i = 0; i < groupSize; i++) {
    // Checks if there are student names left in the "name-pool"
    if (names.length > 0) {
      shuffle(names);
      tempArr.push(names.pop());
      // If the names do not divide equally into groups --> adds the extra person to the last created group
      if (!isDividedEvenly() && names.length == 1) {
        tempArr.push(names.pop());
      }
    }
  }
  // If a person is marked as a navigator --> switch places in the array
  if (groupSize == 2) {
    for (n of mustBeNavigators) {
      if (tempArr[0].indexOf(n) > -1) {
        switchPlaces(tempArr);
      }
    }
    // Console log the results to the user
    console.log(
      `${++counter}) Driver: ${tempArr[0]}, Navigator: ${tempArr[1]}`
    );
  } else console.log(`Group #${++counter}: ${tempArr}`);
}

/*
 * Helper functions
 * -----------------------------------
 */

// Randomly shuffle the array
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex,
    temporaryValue;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Switch the places of the first two items in an array
function switchPlaces(arr) {
  const temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
}

// Checks if the array can be divided evenly into the selected group-size
function isDividedEvenly() {
  if (names.length % groupSize == 0) {
    return true;
  }

  return false;
}

// -----------------------------------
