import { quickSort } from '../sortingAlgorithms/QuickSort';
export const quickSortOnClick = async (array, barsRef, setDisabled) => {
    setDisabled(true);
    await new Promise((resolve, reject)=>{
        setTimeout(resolve, 2000);
    });
    const animations = quickSort(array);
    const arrayBars = barsRef.current;
    for (let i = 0; i < animations.length; i++) {
        arrayBars[animations[i].pivot].current.style.backgroundColor = 'yellow';
        for (let j = 0; j < animations[i].swap.length; j++) {
            const isColorChange = j % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i].swap[j];
                const barOneStyle = arrayBars[barOneIdx].current.style;
                const barTwoStyle = arrayBars[barTwoIdx].current.style;
                const color = j % 3 === 0 ? 'red' : 'black';
                await new Promise((resolve, reject) => {
                    setTimeout(resolve, 25)
                }).then(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;

                });
            }
            else {
                await new Promise((resolve, reject) => {
                    setTimeout(resolve, 25)
                }).then(() => {
                    const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i].swap[j];
                    const barOneStyle = arrayBars[barOneIdx].current.style;
                    const barTwoStyle = arrayBars[barTwoIdx].current.style;
                    barOneStyle.height = `${barTwoHeight}px`;
                    barTwoStyle.height = `${barOneHeight}px`;


                });
            }

        }
        arrayBars[animations[i].partition].current.style.backgroundColor = 'blue';
        arrayBars[animations[i].pivot].current.style.backgroundColor = 'black';
    }
    for(let i = 0; i<animations.length;i++){
        arrayBars[animations[i].partition].current.style.backgroundColor = 'black';

    }
    
}
