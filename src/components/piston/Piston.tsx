import React from 'react';

import classes from './Piston.module.css';

interface Props {
    width?: string;
    left?: string;
    period?: number;
    offset?: string;
}

function Piston(props: Props) {
    const { period } = props;

    const customStyle = {
        width: props.width ? props.width : '4rem',
    };

    const customAnimation = {
        animationDelay: props.offset,
        animationDuration: `${period}s`,
    };

    const pistonStyle = {
        ...customStyle,
        ...customAnimation,
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
