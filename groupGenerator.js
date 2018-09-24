/*
 * Group Generator:
 ******************
 * ~ Created by Samuel Poplovitch
 */

const data = require("./data");

// Mapping the variable to the data file
const names = data.names;

// Assign the groupSize variable a value from the data unless passed as an arg throught the cli
var groupSize = process.argv[2]
  ? (groupSize = process.argv[2])
  : (groupSize = data.groupSize);

// Names we do not want to be in the first index of the array when divided into pairs (for pair programming, first name is the typist)
const flags = ["A"];

// -----------------------------------

// Runs until all names are grouped
while (names.length > 0) {
  const tempArr = [];
  for (let i = 0; i < groupSize; i++) {
    // checks that we have names left in the name-pool
    if (names.length > 0) {
      shuffle(names);
      tempArr.push(names.pop());
      // if the names do not divide equally into groups --> adds the extra person to the last created group
      if (!isDividedEvenly() && names.length == 1) {
        tempArr.push(names.pop());
      }
    }
  }
  // if a person is marked as a flag --> switch places in the array
  if (groupSize == 2) {
    for (f of flags) {
      if (tempArr[0].indexOf(f) > -1) {
        switchPlaces(tempArr);
      }
    }
  }
  console.log(tempArr);
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

function switchPlaces(arr) {
  const temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
}

function isDividedEvenly() {
  if (names.length % groupSize == 0) {
    return true;
  }

  return false;
}

// -----------------------------------
