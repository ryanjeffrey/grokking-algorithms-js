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

////////////////

// Return the largest number in an array

function max(array) {
    if (array.length === 2) return array[0] > array[1] ? array[0] : array[1];
    let subMax = max(array.slice(1));
    // console.log('subMax: ' + subMax)
    return array[0] > subMax ? array[0] : subMax;
}

console.log(max([1, 5, 10, 25, 16, 1, 401, -24]));
console.log(max([10, 50000, 1, 30, 20, 21, 22, -500]));

////////////////

// Quick array sorting

function quicksort(array) {
    // base case (arrays with 0 or 1 element are already sorted)
    if (array.length < 2) return array;
    // recursive case
    let pivot = array[0];
    // sub-array of all the elements less than the pivot
    let less = array.slice(1).filter(function(element) {
        return element <= pivot;
    });
    // sub-array of all the elements greater than the pivot
    let greater = array.slice(1).filter(function(element) {
        return element > pivot;
    });

    return quicksort(less).concat([pivot], quicksort(greater));
}

console.log(quicksort([20, 300, 3, 1, -50, 0]));