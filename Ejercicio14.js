const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(array) {
    
    result={};
    array.forEach((word) => {
        contWords=0;
        array.forEach(word2 => {
            if (word == word2) {
                contWords++;
            }
        })
        result[word]=contWords;
    })
    return result;
}

console.log(repeatCounter(counterWords))