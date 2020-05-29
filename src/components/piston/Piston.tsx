import React, { useEffect, useState } from 'react';

import classes from './Piston.module.css';

function Piston(props: object) {
    return (
        <div className={classes.piston}>
            <div className={classes.ring1}></div>
            <div className={classes.ring2}></div>
            <div className={classes.conBolt}></div>
        </div>
    );
}

export default Piston;
