import React from 'react';

import classes from './Cylinder.module.css';

interface Props {
    children: Array<object>;
}

function Cylinder(props: Props) {
    return (
        <div className={classes.cylinder}>
            <div className={classes.leftWall} />
            <div className={classes.workingArea}>{props.children}</div>
            <div className={classes.rightWall} />
        </div>
    );
}

export default Cylinder;
