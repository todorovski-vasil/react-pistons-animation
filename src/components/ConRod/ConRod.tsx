import React from 'react';

import classes from './ConRod.module.css';

interface Props {
    period?: number;
    offset?: string;
}

function ConRod(props: Props) {
    const conRodStyle = {
        animationDelay: props.offset,
        animationDuration: `${props.period}s`,
    };

    return (
        <div style={conRodStyle} className={classes.conrodContainer}>
            <div style={conRodStyle} className={classes.conrod}>
                <div className={classes.pistonBolt} />
                <div className={classes.crankJournal} />
            </div>
        </div>
    );
}

export default ConRod;
