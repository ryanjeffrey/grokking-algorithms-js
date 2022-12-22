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

// Uses recursive function

function sumRecursive(array) {
    if (array.length == 0) return 0;
    return array[0] + sumRecursive(array.slice(1));
}

console.log(sumRecursive([10, 20, 30, 40]));

////////////////

// Count the number of elements in the array using recursion

function count(array) {
    if (array.length === 0) return 0;
    return 1 + count(array.slice(1));
}

console.log(count([0, 1, 2, 3, 4, 5]));