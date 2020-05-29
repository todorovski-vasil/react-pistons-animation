import React from 'react';

import classes from './ConRod.module.css';

function ConRod(props: object) {
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
