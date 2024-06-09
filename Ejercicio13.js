const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(array,searchname) {
    cont=0;
    solution=false;
    array.forEach((name) => {
        if (name == searchname){
            solution= [true,cont];
        }
        cont++
    })
    return solution;
}

StatusSearch = finderName(nameFinder,'Marc')[0]
PositionSearch = finderName(nameFinder,'Marc')[1]

console.log(`Estado de busqueda: ${StatusSearch} y la posicion es ${PositionSearch}.`)