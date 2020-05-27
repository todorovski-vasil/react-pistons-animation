import React, { useEffect, useState } from 'react';

import classes from './Piston.module.css';

// enum Position {
//     TDC = 0,
//     BDC = 1,
// }

function Piston(props: object) {
    const [cssPhase, setCssPhase] = useState(classes.bdc);

    useEffect(() => {
        const cycle = setInterval(() => {
            setCssPhase((cssPhase) =>
                cssPhase === classes.bdc ? classes.tdc : classes.bdc
            );
        }, 1000);

        return () => {
            clearInterval(cycle);
        };
    }, []);

    return (
        <div className={classes.piston + ' ' + cssPhase}>
            <div className={classes.ring1}></div>
            <div className={classes.ring2}></div>
            <div className={classes.conBolt}></div>
        </div>
    );
}

export default Piston;
