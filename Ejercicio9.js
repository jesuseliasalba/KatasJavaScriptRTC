const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let totalsum = 0;
    param.forEach((number) => {
        totalsum += number
    });
    return totalsum;
}

console.log(sumAll(numbers))