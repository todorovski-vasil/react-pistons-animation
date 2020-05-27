import React from 'react';

import classes from './ConRod.module.css';

interface StateInterface {
    phase: number;
    phaseCss: string;
}

interface ActionInterface {
    type: string;
    payload?: any;
}

// const phases: Array<string> = [
//     classes.tdc,
//     classes.ldc,
//     classes.bdc,
//     classes.rdc,
// ];

// const initialState: StateInterface = {
//     phase: 3,
//     phaseCss: phases[3],
// };

// const reducer: React.Reducer<StateInterface, ActionInterface> = (
//     prevState: StateInterface,
//     action: ActionInterface
// ) => {
//     switch (action.type) {
//         case 'NEXT_STAGE':
//             return {
//                 ...prevState,
//                 phase: (prevState.phase + 1) % 4,
//                 phaseCss: phases[(prevState.phase + 1) % 4],
//             };
//         default:
//             return prevState;
//     }
// };

function ConRod(props: object) {
    // const [state, dispatch] = useReducer(reducer, initialState);

    // useEffect(() => {
    //     const cycle = setInterval(() => {
    //         dispatch({ type: 'NEXT_STAGE' });
    //     }, 500);

    //     return () => {
    //         clearInterval(cycle);
    //     };
    // }, []);

    return (
        <div className={classes.conrodContainer}>
            <div className={classes.conrod}>
                <div className={classes.pistonBolt} />
                <div className={classes.crankJournal} />
            </div>
        </div>
    );
}

export default ConRod;
