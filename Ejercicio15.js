const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

function WordInString(array) {
    array.forEach( (sentence) => {
        if ( sentence.includes("Camiseta") == true){console.log(sentence)}
    })
}

WordInString(products)