import React, { useEffect, useState } from 'react';

import classes from './Piston.module.css';

enum Position {
    TDC = 0,
    BDC = 1,
}

function Piston(props: object) {
    // const [phase, setPhase] = useState(Position.TDC);
    const [cssPhase, setCssPhase] = useState(classes.tdc);
    // const position = useRef({ phase: Position.TDC, cssClass: classes.tdc });

    useEffect(() => {
        const cycle = setInterval(() => {
            setCssPhase((cssPhase) =>
                cssPhase === classes.bdc ? classes.tdc : classes.bdc
            );
            // setPhase(phase ? Position.TDC : Position.BDC);
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
