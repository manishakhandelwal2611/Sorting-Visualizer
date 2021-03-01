import { swap } from '../utility/swap';
export const BubbleSort = (array) => {
    const animations = [];
    if (array.length === 1) return array;
    BubbleSortHelper(array, 0, array.length - 1, animations);
    console.log(array);
    return animations;
}

const BubbleSortHelper = (array, start, end, animations) => {
    for (let i = start; i <= end; i++) {
        let flag = false;
        for (let j = start; j < end - i; j++) {
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if (array[j] > array[j + 1]) {
                flag = true;
                animations.push([j, j + 1, array[j], array[j + 1]]);
                swap(array, j, j + 1);
            }
            else {
                animations.push([j, j + 1, array[j + 1], array[j]]);
            }
        }
        if (!flag) {
            break;
        }
    }
}

