const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let longword = "";
    param.forEach((word) => {
        if (word.length > longword.length) {
            longword = word;
    }
    })
    return longword
}

console.log(`La palabra mas larga es ${findLongestWord(avengers)}`)