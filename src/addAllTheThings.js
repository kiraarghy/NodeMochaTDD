var addAllTheThings = arr => {
  var runningTotal = 0;
  if (arr == null) {
    return 0;
  }
  arr.forEach(element => {
    console.log(element, typeof element);
    if (element === Infinity || element === -Infinity) {
      return;
    }
    if (typeof element != 'number') {
      throw new Error ("Not a number");
    }
    runningTotal = runningTotal + element;
  });
  return runningTotal;
};

module.exports = addAllTheThings;
