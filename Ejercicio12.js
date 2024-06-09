const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

function removeDuplicates(array) {
    let pos=0;
    array.forEach((element) => {
        pos++;
        if (array.indexOf(element, pos) !== -1){
            let posSplice = pos-1
            array.splice(posSplice, 1)
        }
    }
        )
    return array
}

console.log(removeDuplicates(duplicates))