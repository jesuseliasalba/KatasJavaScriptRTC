const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let totalsum = 0;
    param.forEach((number) => {
        totalsum += number
    });
    return (totalsum/param.length);
}

console.log(average(numbers).toFixed(2))