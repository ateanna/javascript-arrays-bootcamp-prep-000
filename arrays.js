var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(theArray, addToArray){
  var returnArray = theArray.unshift(addToArray);

  return returnArray
}

function destructivelyAddElementToBeginningOfArray(theArray, addToArray){
  theArray = [...theArray, addToArray]

  return theArray
}
