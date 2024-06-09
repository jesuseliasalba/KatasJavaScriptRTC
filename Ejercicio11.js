const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let finalsum=0;
    param.forEach((element) => {
        if (typeof element == "number") {
            finalsum += element
        } else if (typeof element == "string") {
            finalsum += (element.length)
        } else {
            console.log("No es ni un número ni una cadena.")
        }
    });
    return finalsum;
}

console.log(`El promedio de strings es ${averageWord(mixedElements)}`)