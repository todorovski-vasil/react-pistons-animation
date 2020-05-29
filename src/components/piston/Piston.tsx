import React from 'react';

import classes from './Piston.module.css';

interface Props {
    offset?: string;
}

function Piston(props: Props) {
    const pistonStyle = {
        animationDelay: props.offset,
    };

    return (
        <div style={pistonStyle} className={classes.piston}>
            <div className={classes.ring1}></div>
            <div className={classes.ring2}></div>
            <div className={classes.conBolt}></div>
        </div>
    );
}

export default Piston;
