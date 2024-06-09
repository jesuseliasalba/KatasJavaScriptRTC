const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

let OfAge = []
let UnderAge = []

for (let object of users){
    if(object.years < 18 && object.years >=0){
        UnderAge.push(object.name)
    } else if (object.years >= 18) {
        OfAge.push(object.name)
    }
}

console.log(`Usuarios menores de edad : ` + UnderAge);
console.log(`Usuarios mayores de edad : ` + OfAge)
