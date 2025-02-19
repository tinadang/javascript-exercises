const fibonacci = function(numberInSeries) {
    if (numberInSeries < 0) {
        return "OOPS";
    }

    let sequence = [0, 1];

    for (let i = 1; i <= +numberInSeries; i++) {
        sequence.push(sequence[i-1] + sequence[i]);
    }

    return sequence[numberInSeries];
};

// Do not edit below this line
module.exports = fibonacci;
