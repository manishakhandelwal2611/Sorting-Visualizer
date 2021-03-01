import { makeStyles } from '@material-ui/core';


export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: "white",

    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '70vw'

    },
    heding: {
        width: '30vw'
    },
    mainContainer: {
        height: '100vh',
        width: '100vw',
        margin: '0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    barContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    },
    bar: {
        width: '20px',
        display: 'inline-block',
        margin: '0 3px'
    }


}));