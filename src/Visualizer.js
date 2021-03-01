import React, { useState, useEffect, createRef, useRef } from 'react';
import { AppBar, Button, Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import { bubbleSortOnClick } from './utility/bubbleSortOnClick';
import { quickSortOnClick } from './utility/quickSortOnClick';
import { mergeSortOnClick } from './utility/mergeSortOnClick';
import { insertionSortOnClick } from './utility/insertionSortOnClick';
import { selectionSortOnClick } from './utility/selectionSortOnClick';
import { generateRandomArray } from './utility/generateRandomArray';
function Visualizer() {
    const [array, setArray] = useState(generateRandomArray());
    const barsRef = useRef([]);
    const [disabled, setDisabled] = useState(false);
    const classes = useStyles();
    const buttons = [{ 'Generate Random Array': generateRandomArray }, { 'Merge Sort': mergeSortOnClick }, { 'Quick Sort': quickSortOnClick }, { 'Bubble Sort': bubbleSortOnClick }, { 'Insertion Sort': insertionSortOnClick }, { 'Selection Sort': selectionSortOnClick }];
    useEffect(() => {
        if (!disabled ) {
            setArray(generateRandomArray());
            barsRef.current = Array(array.length).fill().map((_, i) =>  createRef());
        }


    }, []);

    const handleClick = async (object) => {
        if (Object.keys(object)[0] === 'Generate Random Array') {
            setArray(generateRandomArray);
        }
        else {
            await Object.values(object)[0](array, barsRef, setDisabled);
            setDisabled(false);

        }

    }
    return (
        <Container className={classes.mainContainer} maxWidth="lg">
            <AppBar className={classes.appBar}>
                <Typography variant="h5" color="primary">Sorting Visualizer</Typography>
                <div className={classes.buttonContainer}>
                    {
                        buttons.map((b, idx) => <Button key={idx} color="primary" variant="contained" onClick={() => handleClick(b)} disabled={disabled}>{Object.keys(b)[0]}</Button>)
                    }
                </div>
            </AppBar>
            <div className={classes.barContainer}>
                {array.map((value, idx) =>
                    <div ref={barsRef.current[idx]} className={classes.bar} key={idx} style={{ height: `${value}px`, backgroundColor: 'black' }}></div>
                )
                }
            </div>
        </Container>
    )

}


export default Visualizer;
