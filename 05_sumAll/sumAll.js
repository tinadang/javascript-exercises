const sumAll = function(num1, num2) {

    //Check that arguments are numbers
    if (!(typeof num1 == "number") || !(typeof num2 == "number")) {
        return "ERROR";
    }

     //Check that arguments are integers
    if (num1 % 1 != 0 || num2 % 1 != 0) {
        return "ERROR";
    }
    
    //Check that arguments are positive
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    let sum = 0;
    let startNumber = Math.min(num1, num2);
    let endNumber = Math.max(num1, num2);

    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
