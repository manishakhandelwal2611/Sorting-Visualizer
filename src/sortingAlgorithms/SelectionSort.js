import { swap } from '../utility/swap';
export const SelectionSort = (array) => {
    const animations = [];
    if (array.length === 1) return array;
    const auxillaryArray = array.slice();
    selectionSortHelper(array, 0, array.length - 1, animations);
    console.log(array);
    return animations;
}

const selectionSortHelper = (array, start, end, animations) => {
    for (let i = start; i < end; i++) {
        let minIndex = i;
        for (let j = i + 1; j <= end; j++) {
            animations.push([minIndex, j]);
            animations.push([minIndex, j]);
            if (array[j] < array[minIndex]) {
                minIndex = j

            }
            animations.push([minIndex, j, array[j], array[minIndex]]);

        }
        animations.push([minIndex, i]);
        animations.push([minIndex, i]);
        animations.push([minIndex, i, array[minIndex], array[i]]);

        swap(array, minIndex, i);


    }
}

