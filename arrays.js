var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(theArray, addToArray){
  var returnArray = [addToArray, ...theArray]

  return returnArray
}

function destructivelyAddElementToBeginningOfArray(theArray, addToArray){
  theArray = [addToArray, ...theArray]
}

function addElementToEndOfArray(theArray, addToArray){
  var returnArray = [...theArray, addToArray]
}

function destructivelyAddElementToEndOfArray(theArray, addToArray){

}
