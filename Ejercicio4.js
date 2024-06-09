//* 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
//* const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(`El primer avenger es ${avengers[0]}.`)

//* 1.2 Cambia el primer elemento de avengers a "IRONMAN"
//* const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers.splice(0,1,"IRONMAN")
console.log(`He cambiado el array y ahora es: ` + avengers)

avengers.splice(0,1,"HULK") //! Para arreglar el array

//* 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
//* const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(`La longitud del array es ${avengers.length}.`)

console.log("-----------------------------")

//* 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//* Muestra en consola el último personaje del array
//* const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty","Summer")
console.log(`El ultimo elemento de la lista es ${rickAndMortyCharacters.slice(-1)[0]}.`)

//* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
//* const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.push("Lapiz Lopez") //! Añado "Lapiz Lopez"

rickAndMortyCharacters.pop(-1)
console.log(`El primer elemento de la lista es ${rickAndMortyCharacters.slice(0)[0]} y el ultimo elemento de la lista es ${rickAndMortyCharacters.slice(-1)[0]}.`)
 
//* 1.6 Elimina el segundo elemento del array y muestra el array por consola.
//* const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.push("Lapiz Lopez") //! Añado "Lapiz Lopez"

rickAndMortyCharacters.splice(1,1)
console.log(rickAndMortyCharacters)
