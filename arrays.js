var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(theArray, addToArray){
  var returnArray = [addToArray, ...theArray]

  return returnArray
}

function destructivelyAddElementToBeginningOfArray(theArray, addToArray){
  return theArray.unshift(addToArray)
}

function addElementToEndOfArray(theArray, addToArray){
  var returnArray = [...theArray, addToArray]
}

function destructivelyAddElementToEndOfArray(theArray, addToArray){
  return theArray.push(addToArray)
}

function accessElementInArray(theArray, theIndex){
  return theArray[theIndex]
}

function destructivelyRemoveElementFromEndOfArray(theArray){
  theArray.unshift()
  return theArray
}

function removeElementFromBeginningOfArray(theArray){
  return theArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(theArray){
  theArray.pop()

  return theArray
}

function removeElementFromEndOfArray(theArray){
  return theArray.slice(theArray.length - 1)
}
