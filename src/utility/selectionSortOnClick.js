import { SelectionSort } from '../sortingAlgorithms/SelectionSort';

export const selectionSortOnClick = async(array, barsRef, setDisabled) => {
    setDisabled(true);
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
    const animations = SelectionSort(array);
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
                const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].current.style;
                const barTwoStyle = arrayBars[barTwoIdx].current.style;
                barOneStyle.height = `${barTwoHeight}px`;
                barTwoStyle.height = `${barOneHeight}px`;
            });
        }
    }
}
