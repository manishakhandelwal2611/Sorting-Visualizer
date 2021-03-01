import { swap } from '../utility/swap';
export const quickSort = (array) => {
    const animations = [];
    if (array.length === 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

const quickSortHelper = (array, start, end, animations) => {
    const animation = {}
    if (start < end) {
        const partition = doPartition(array, start, end, animations, animation);
        quickSortHelper(array, start, partition - 1, animations);
        quickSortHelper(array, partition + 1, end, animations);
    }
}

const doPartition = (array, start, end, animations, animation) => {
    let pivot = array[end];
    animation.pivot = end;
    animation.swap = [];
    let i = start - 1;
    for (let j = start; j < end; j++) {
        if (array[j] < pivot) {
            i++;
            animation.swap.push([i, j]);
            animation.swap.push([i, j]);
            animation.swap.push([i, j, array[i], array[j]]);
            swap(array, i, j);
        }
        
    }
    animation.swap.push([i + 1, end]);
    animation.swap.push([i + 1, end]);
    animation.swap.push([i + 1, end, array[i + 1], array[end]]);
    swap(array, i + 1, end);
    animation.partition = i + 1;
    animations.push(animation);
    return i + 1;

}

