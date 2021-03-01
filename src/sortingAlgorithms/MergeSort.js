export const mergeSort = (array) => {
    const animations = [];
    if (array.length === 1) return array;
    const auxillaryArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, auxillaryArray, animations);
    console.log(array);
    return animations;
}

const mergeSortHelper = (array, start, end, auxillaryArray, animations) => {
    if (start === end) return;
    const mid = Math.floor((end + start) / 2);
    mergeSortHelper(auxillaryArray, start, mid, array, animations);
    mergeSortHelper(auxillaryArray, mid + 1, end, array, animations);
    merge(array, start, end, mid, auxillaryArray, animations);
}

const merge = (array, start, end, mid, auxillaryArray, animations) => {
    const animation = {}
    let i = start, j = mid + 1, k = start;
    while (i <= mid && j <= end) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxillaryArray[i] <= auxillaryArray[j]) {
            animations.push([k, auxillaryArray[i]]);
            array[k++] = auxillaryArray[i++];

        }
        else {
            animations.push([k, auxillaryArray[j]]);
            array[k++] = auxillaryArray[j++];
        }
    }
    while (i <= mid) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxillaryArray[i]]);
        array[k++] = auxillaryArray[i++];
    }
    while (j <= end) {
        animations.push([i, j]);
        animations.push([i, j]);
        animations.push([k, auxillaryArray[j]]);
        array[k++] = auxillaryArray[j++];
    }

}