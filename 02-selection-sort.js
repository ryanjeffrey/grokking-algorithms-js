function findSmallestIndex(array) {
    let smallestElement = array[0];
    let smallestIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestElement) {
            smallestElement = array[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

function selectionSort(array) {
    let sortedArray = [];
    const copyArray = array.slice();
    const length = array.length;

    for (let i = 0; i < length; i++) {
        const smallestIndex = findSmallestIndex(copyArray);
        sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);
    }

    return sortedArray;
}

const sourceArray = [5, 3, 6, 2, 10];
const newSortedArray = selectionSort(sourceArray);

console.log("Source array - ", sourceArray);
console.log("New sorted array - ", newSortedArray);