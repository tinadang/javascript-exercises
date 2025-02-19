const palindromes = function (word) {
    //Change word to lowercase, split into array of characters, filter valid characters
    let wordArray = word
    .toLowerCase()
    .split("")
    .filter((letter) => /[a-z0-9]/.test(letter));

    //Create a variable to hold a reversed word array
    let reversedWordArray = wordArray.toReversed();

    //Test if each character in each array match with each other
    return wordArray.every((letter, index) => letter === reversedWordArray[index]);

};

// Do not edit below this line
module.exports = palindromes;
