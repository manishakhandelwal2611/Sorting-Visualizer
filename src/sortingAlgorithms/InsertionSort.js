export const InsertionSort = (array) => {
    const animations = [];
    if (array.length === 1) return array;
    InsertionSortHelper(array, 0, array.length - 1, animations);
    console.log(array);
    return animations;
}

const InsertionSortHelper = (array, start, end, animations) => {
    for (let i = 1; i <= end; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            animations.push([j, j + 1, array[j], array[j + 1]]);
            array[j + 1] = array[j];
            j = j - 1;
        }

        animations.push([j + 1, j + 1]);
        animations.push([j + 1, j + 1]);
        animations.push([j + 1, j + 1, key, key]);


        array[j + 1] = key;
    }
}
