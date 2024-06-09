const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

console.log("Antes :")
console.log(placesToTravel)

cont=0  ;
placesToTravel.forEach( (element) => {
    if (element.id == 11 || element.id == 40){
        placesToTravel.splice(cont,1)
    }
    cont++;
})

console.log("Despues : ")
console.log(placesToTravel)