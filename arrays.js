var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(theArray, addToArray){
  var returnArray = [addToArray, ...theArray]

  return returnArray
}

function destructivelyAddElementToBeginningOfArray(theArray, addToArray){
  theArray = [...theArray, addToArray]
}

function addElementToEndOfArray(theArray, addToArray){

}

function destructivelyAddElementToEndOfArray(theArray, addToArray){

}
