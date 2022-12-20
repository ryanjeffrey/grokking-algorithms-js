function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

console.log(sum([1, 2, 3, 4]));

// Uses reduce method

function sumReduce(array) {
    return array.reduce(function(previous, current) {
        return previous + current;
    });
}

console.log(sumReduce([1, 2, 3, 4]));