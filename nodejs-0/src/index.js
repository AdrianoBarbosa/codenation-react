'use strict'

function getFibonacciArray(limit) {
    const fibo = [0, 1]
    while (fibo[fibo.length -1] < limit) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2])
    }
    return fibo
}

module.exports = {
    fibonacci: () => getFibonacciArray(350),
    isFibonnaci: (num) => getFibonacciArray(num).includes(num)
}
