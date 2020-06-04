import React, { ReactElement } from 'react';

import classes from './Cylinder.module.css';

interface Props {
    width?: string;
    left?: string;
    angle: number;
    offset?: string;
    children: Array<ReactElement>;
}

interface ChildProps {
    width?: string;
    left?: string;
    key: number;
    offset?: string;
}

interface CylinderStyle {
    transform: string;
    left?: string;
    width?: string;
}

function Cylinder(props: Props) {
    const style: CylinderStyle = { transform: `rotate(${props.angle}deg)` };
    if (props.width) {
        style.left = `calc((4rem - ${props.width}) / 2)`;
    }

    return (
        <div style={style} className={classes.cylinder}>
            <div className={classes.leftWall} />
            <div className={classes.workingArea}>
                {React.Children.map(props.children, (child, index) => {
                    const childProps: ChildProps = {
                        offset: props.offset,
                        key: index,
                    };
                    // @ts-ignore
                    if (child.type.name === 'Piston') {
                        childProps.width = props.width;
                        childProps.left = props.left;
                    }
                    return React.cloneElement(child, childProps);
                })}
            </div>
            <div className={classes.rightWall} />
        </div>
    );
}

export default Cylinder;
