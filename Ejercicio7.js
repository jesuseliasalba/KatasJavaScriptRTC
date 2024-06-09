function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo){
        return numberOne
    } else {
        return numberTwo
    }
}

let num1 = 10;
let num2 = 50;

console.log(`El numero mas alto es ${sum(num1,num2)}` )