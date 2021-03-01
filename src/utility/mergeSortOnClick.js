import { mergeSort } from '../sortingAlgorithms/MergeSort';

export const mergeSortOnClick = async(array, barsRef, setDisabled) => {
    setDisabled(true);
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
    const animations = mergeSort(array);
    const arrayBars = barsRef.current;
    for (let i = 0; i < animations.length; i++) {

        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].current.style;
            const barTwoStyle = arrayBars[barTwoIdx].current.style;
            const color = i % 3 === 0 ? 'red' : 'black';
            await new Promise((resolve, reject) => setTimeout(resolve, 25)).then(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            });
        }
        else {
            await new Promise((resolve, reject) => setTimeout(resolve, 25)).then(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].current.style;
                barOneStyle.height = `${newHeight}px`;
            });
        }

    }

}