const removeFromArray = function(array, ...targets) {

    //Method 1: Create and return a new array with targets removed
    let newArray = [];

    checkArray:
    for (let i = 0; i < array.length; i++) {
        for (const target of targets) {
            if (array[i] === target) {
                continue checkArray;
            }
        }
        newArray.push(array[i]);
    }

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
