import React from 'react';

import classes from './ConRod.module.css';

interface Props {
    offset?: string;
}

function ConRod(props: Props) {
    const conRodStyle = {
        animationDelay: props.offset,
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
