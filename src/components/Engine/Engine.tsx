import React, { useState, useEffect } from 'react';

import Cylinder from '../Cylinder/Cylinder';
import Piston from '../Piston/Piston';
import ConRod from '../ConRod/ConRod';
import CrankShaft from '../CrankShaft/CrankShaft';

const engineStyle = {
    position: 'relative' as 'relative',
    // top: '1rem',
    left: '7rem',
    height: '22rem',
    width: '10rem',
};

// const delay = ((2 / 360) * (180 - angle) - 2).toFixed(3);
// const delay2 = ((2 / 360) * (270 - angle)).toFixed(3);
// const delay2 = ((2 / 360) * (270 - angle)).toFixed(3); // crossplane WIP
// const delay3 = ((2 / 360) * (270 - angle)).toFixed(3); // crossplane WIP
const calculateDelay = (angle: number, period: number) => {
    // const period = 1 / speed;
    return ((period / 360) * (180 - angle) - period).toFixed(3);
};

interface EngineProps {
    bore: string;
    angle: number;
    period: number;
}

function Engine(props: EngineProps) {
    const { angle, bore, period } = props;
    const [delay, setDelay] = useState(
        calculateDelay(angle, period ? period : 2)
    );

    useEffect(() => setDelay(calculateDelay(angle, period ? period : 2)), [
        angle,
        period,
    ]);

    return (
        <div style={engineStyle}>
            <Cylinder angle={angle / 2} width={bore} period={period}>
                <Piston />
                <ConRod />
            </Cylinder>
            <Cylinder
                angle={-(angle / 2)}
                width={bore}
                period={period}
                offset={`${delay}s`}
            >
                <Piston />
                <ConRod />
            </Cylinder>
            {/* <Cylinder
                angle={angle / 2}
                width={bore}
                period={period}
                offset={`${-(period / 2)}s`}
            >
                <Piston />
                <ConRod />
            </Cylinder>
            <Cylinder
                angle={-(angle / 2)}
                width={bore}
                period={period}
                offset={`${Number.parseFloat(delay) - period / 2}s`}
            >
                <Piston />
                <ConRod />
            </Cylinder> */}
            <CrankShaft period={period} />
        </div>
    );
}

export default Engine;
