var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(theArray, addToArray){
  var returnArray = [addToArray, ...theArray]

  return returnArray
}

function destructivelyAddElementToBeginningOfArray(theArray, addToArray){
  theArray.unshift(addToArray)
  return
}

function addElementToEndOfArray(theArray, addToArray){
  var returnArray = [...theArray, addToArray]
  return returnArray
}

function destructivelyAddElementToEndOfArray(theArray, addToArray){
  //theArray.push(addToArray)
  return theArray.push(addToArray)
}

function accessElementInArray(theArray, theIndex){
  return theArray[theIndex]
}

function destructivelyRemoveElementFromEndOfArray(theArray){
  theArray.shift(1)
  return theArray
}

function removeElementFromBeginningOfArray(theArray){
  theArray.slice(1)
  return theArray
}

function destructivelyRemoveElementFromEndOfArray(theArray){
  theArray.pop()

  return theArray
}

function removeElementFromEndOfArray(theArray){
  theArray.slice(theArray.length - 1)
  return theArray
}
