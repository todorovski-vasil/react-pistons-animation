import React, { ReactElement } from 'react';

import classes from './Cylinder.module.css';

interface Props {
    angle: number;
    offset?: string;
    children: Array<ReactElement>;
}

function Cylinder(props: Props) {
    return (
        <div
            style={{ transform: `rotate(${props.angle}deg)` }}
            className={classes.cylinder}
        >
            <div className={classes.leftWall} />
            <div className={classes.workingArea}>
                {props.children.map((child, index) =>
                    React.cloneElement(child, {
                        offset: props.offset,
                        key: index,
                    })
                )}
            </div>
            <div className={classes.rightWall} />
        </div>
    );
}

export default Cylinder;
