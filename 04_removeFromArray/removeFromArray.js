const removeFromArray = function(array, ...targets) {

    //Method 1: Create and return a new array with targets removed
    // let newArray = [];

    // checkArray:
    // for (let i = 0; i < array.length; i++) {
    //     for (const target of targets) {
    //         if (array[i] === target) {
    //             continue checkArray;
    //         }
    //     }
    //     newArray.push(array[i]);
    // }

    // return newArray;

    //Method 2: Remove target from original array
    checkArray:
    for (let i = 0; i < array.length; i++) {
        for (const target of targets) {
            if (array[i] === target) {
                array.splice(i, 1);
                i--; //Adjust iteration count if something is removed
                continue checkArray;
            }
        }
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
