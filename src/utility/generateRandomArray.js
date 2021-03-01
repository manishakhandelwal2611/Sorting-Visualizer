export const generateRandomArray = () => {
    const array = [];
    for (let i = 0; i < 40; i++) {
        array.push(Math.floor(Math.random() * (500 - 1) + 1));
    }
    return array;
}
